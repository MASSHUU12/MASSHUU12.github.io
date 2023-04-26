import { FunctionComponent, JSX } from "preact";

import Popup from "cmp/common/Popup";
import { usePopupsStore } from "src/app/store";

/**
 * CV popup
 *
 * @return {*}  {JSX.Element}
 */
const CV: FunctionComponent<any> = (): JSX.Element => {
  const cvOpened = usePopupsStore(state => state.cvOpened);

  return (
    <>
      {cvOpened && (
        <Popup popup="cvOpened">
          <div class="flex flex-col items-center text-white_custom gap-2">
            <a class="text-4xl" href="/assets/gawrysiak_cv.pdf" target="_blank">
              gawrysiak_pl.pdf
            </a>
            <a
              class="text-4xl"
              href="/assets/gawrysiak_cv_en.pdf"
              target="_blank">
              gawrysiak_en.pdf
            </a>
          </div>
        </Popup>
      )}
    </>
  );
};

export default CV;
