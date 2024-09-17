import { useProjectCategoryStore } from "@/app/store";
import projects from "@/projects.json";
import { InfoProps } from "@/typing/interfaces";
import { projectCategory } from "@/typing/types";
import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { JSX } from "preact";
import { useTranslation } from "react-i18next";
import Project from "./Project";

function Projects(): JSX.Element {
  const store = useProjectCategoryStore();
  const { t } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleCategory = (
    _: MouseEvent,
    newCategory: projectCategory | null,
  ): void => {
    if (newCategory === null || store.category === newCategory) {
      return;
    }

    store.setCategory(newCategory);
  };

  const displayProject = ({ item, keyID }: InfoProps): JSX.Element => {
    if (item.category !== store.category && store.category !== "all") {
      return <></>;
    }

    return <Project key={keyID} item={item} keyID={keyID} />;
  };

  return (
    <Stack id="works" gap={4} mb={8} alignItems="center">
      <ToggleButtonGroup
        sx={{
          backgroundColor: "lightYellow.main",
        }}
        size={`${matches ? "medium" : "small"}`}
        exclusive
        value={store.category}
        onChange={handleCategory}
        aria-label="Category selection">
        <ToggleButton value="all" aria-label={`${t("wCAll")}`}>
          {t("wCAll")}
        </ToggleButton>
        <ToggleButton value="web" aria-label={`${t("wCWeb")}`}>
          {t("wCWeb")}
        </ToggleButton>
        <ToggleButton value="mobile" aria-label={`${t("wCMob")}`}>
          {t("wCMob")}
        </ToggleButton>
        <ToggleButton value="desktop" aria-label={`${t("wCDes")}`}>
          {t("wCDes")}
        </ToggleButton>
        <ToggleButton value="extension" aria-label={`${t("wCEx")}`}>
          {t("wCEx")}
        </ToggleButton>
      </ToggleButtonGroup>
      {projects.map(
        (item: InfoProps["item"], index: number): JSX.Element =>
          displayProject({ item, keyID: index }),
      )}
    </Stack>
  );
}

export default Projects;
