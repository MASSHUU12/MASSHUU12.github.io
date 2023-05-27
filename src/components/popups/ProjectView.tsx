import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { FunctionComponent, JSX } from "preact";

import { usePopupsStore, useProjectInfoStore } from "@/app/store";

import Popup from "@/components/common/Popup";
import Social from "@/components/common/Social";
import ProjectImage from "@/components/sections/projects/ProjectImage";

const ProjectView: FunctionComponent<unknown> = (): JSX.Element => {
  const enabled = usePopupsStore(state => state.projectView);
  const data = useProjectInfoStore(state => state.item);
  const { t } = useTranslation();

  return (
    <>
      {enabled && (
        <Popup popup="projectView">
          <div class="h-full overflow-scroll">
            <section class="flex justify-between max-md:flex-col">
              <div>
                {/* Title */}
                <h1 class="text-white_custom text-2xl flex items-center gap-2">
                  {data.title}
                  {data.teamwork && (
                    <span class="text-gray text-sm">{t("wTeam")}</span>
                  )}
                </h1>
                {/* Labels */}
                {data.labels && (
                  <div class="flex flex-row flex-wrap gap-2 my-2">
                    {data.labels.map((label, index) => {
                      return (
                        <span key={index} class="text-light_yellow font-thin">
                          {t(label)}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
              {/* Links */}
              <div class="flex flex-col gap-2">
                {data.links.map((object, index) => {
                  return (
                    <Social
                      href={object.link}
                      text={t(object.name)}
                      key={index}>
                      <Icon
                        icon={
                          object.type === "github"
                            ? "akar-icons:github-fill"
                            : "mdi:web"
                        }
                        width="24"
                        color="#348899"
                      />
                    </Social>
                  );
                })}
              </div>
            </section>
            {/* Description */}
            <section class="mt-4">
              <h2 class="text-white_custom text-l">{t("wDesc")}</h2>
              <p class="text-gray">{t(data.description)}</p>
            </section>
            {/* Images */}
            <section class="flex flex-col mt-4 pb-4">
              <h2 class="text-white_custom text-l">{t("wImgs")}</h2>
              <div class="flex flex-row flex-wrap gap-2">
                {data.images.map((image, index) => {
                  return (
                    <ProjectImage
                      key={index}
                      image={image}
                      title={data.title}
                      classes="cursor-pointer mb-4 h-[60vh] max-md:h-[100%]"
                    />
                  );
                })}
              </div>
            </section>
          </div>
        </Popup>
      )}
    </>
  );
};

export default ProjectView;
