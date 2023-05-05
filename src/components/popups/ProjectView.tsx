import Popup from "cmp/common/Popup";
import { FunctionComponent, JSX } from "preact";
import { usePopupsStore } from "src/app/store";

const ProjectView: FunctionComponent<unknown> = (): JSX.Element => {
  const enabled = usePopupsStore(state => state.projectView);

  return (
    <>
      {enabled && (
        <Popup popup="projectView">
          <div>
            <span>hello world</span>
          </div>
        </Popup>
      )}
    </>
  );
};

export default ProjectView;
