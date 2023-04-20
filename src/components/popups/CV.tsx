import Popup from "cmp/common/Popup";
import { FunctionComponent } from "preact";
import { useAppSelector } from "src/app/hooks";

/**
 * CV popup
 *
 * @return {*}  {JSX.Element}
 */
const CV: FunctionComponent<any> = (): JSX.Element => {
  const cvOpened = useAppSelector(state => state.popups.cvOpened);

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
