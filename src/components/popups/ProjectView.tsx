import Popup from "cmp/common/Popup";
import { useTranslation } from "react-i18next";
import { FunctionComponent, JSX } from "preact";
import { usePopupsStore, useProjectInfoStore } from "src/app/store";
import Social from "cmp/common/Social";
import { Icon } from "@iconify/react";
import ProjectImage from "cmp/sections/projects/ProjectImage";

const ProjectView: FunctionComponent<unknown> = (): JSX.Element => {
  const enabled = usePopupsStore(state => state.projectView);
  const data = useProjectInfoStore(state => state.item);
  const { t } = useTranslation();

  return (
    <>
      {enabled && (
        <Popup popup="projectView">
          <div class="h-full overflow-scroll">
            <section>
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
                        <span key={index} class="text-gray font-thin">
                          {t(label)}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
              {/* Links */}
              <div>
                {data.links.map((object, index) => {
                  return (
                    <Social
                      href={object.link}
                      text={t(object.name)}
                      key={index}>
                      <Icon
                        icon={
                          object.name === "github"
                            ? "akar-icon:github-fill"
                            : "mdi:web"
                        }
                        width="24"
                        color="#fffefa"
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
            <section class="flex flex-row flex-wrap mt-4">
              <h2 class="text-white_custom text-l">{t("wImgs")}</h2>
              {data.images.map((image, index) => {
                return (
                  <ProjectImage
                    key={index}
                    image={image}
                    title={data.title}
                    classes="cursor-pointer max-md:mb-4"
                  />
                );
              })}
            </section>
          </div>
        </Popup>
      )}
    </>
  );
};

export default ProjectView;
