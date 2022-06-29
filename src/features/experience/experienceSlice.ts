import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

const initialState = {
  value: {
    frontend: {
      icon: "bi:code-slash",
      title: "Front End",
      items: {
        HTML: [],
        CSS: ["SCSS"],
        JavaScript: ["React", "React Native", "Redux", "TypeScript", "jQuery"],
      },
    },
    backend: {
      icon: "bi:file-earmark-code",
      title: "Back End",
      items: {
        PHP: ["Laravel", "Composer"],
        "Node.js*": [],
      },
    },
    other: {
      icon: "carbon:screen",
      title: "other",
      items: {
        Python: [],
        "C++*": [],
      },
    },
    tools: {
      icon: "fluent:window-dev-tools-24-regular",
      title: "tools",
      items: {
        GitHub: ["GitHub Desktop"],
        Photoshop: [],
        Figma: [],
        "Docker*": [],
        Blender: [],
        "DaVinci Resolve": [],
      },
    },
  },
};

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
});

// export const {  } = experienceSlice.actions;

export const selectExperience = (state: RootState) => state.experience.value;

export default experienceSlice.reducer;
