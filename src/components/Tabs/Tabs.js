import { useSelector, useDispatch } from "react-redux";
import { selectLang } from "../../store/actions/selectedLanguage";

export default function Tabs() {
  const languages = ["All", "Javascript", "Java", "CSS", "Python"];
  const selectedLanguage = useSelector((state) => state.selectedLanguage);
  const dispatch = useDispatch();
  return (
    <div className="max-w-3xl mx-auto relative z-0 rounded-lg shadow flex divide-x divide-gray-200 mb-4">
      {languages.map((lang, i) => (
        <button
          onClick={() => dispatch(selectLang(lang))}
          key={i}
          className={`text-gray-900
          ${
            i === 0
              ? "rounded-l-lg "
              : i === languages.length - 1
              ? "rounded-r-lg "
              : ""
          }group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10 focus:outline-none`}
        >
          {lang}
          {selectedLanguage === lang && (
            <span
              aria-hidden="true"
              className="bg-red-500 absolute inset-x-0 bottom-0 h-1"
            ></span>
          )}
        </button>
      ))}
    </div>
  );
}
