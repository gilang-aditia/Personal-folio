import { useState } from "react";
import { getConfigData } from "../data/configReader";
import { Link } from "react-router-dom";

export default function Card() {
  const configData = getConfigData();
  const projects = configData.projects;
  const [isHovered, setIsHovered] = useState(false);

  const svgClass = isHovered
    ? "w-6 h-6 text-gray-500 transition delay-150"
    : "w-6 h-6 text-gray-300";

  return (
    <>
      <div className="px-2">
        <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5 ">
          <div className="flex items-center justify-between mb-5">
            <div className="font-medium text-black text-lg flex items-center gap-x-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              Skill
            </div>
            {/*  */}
          </div>
          <div className="flex flex-row gap-3 overflow-x-auto justify-center">
            <ul className="clients-list flex flex-row space-x-3">
              <li className="clients-item">
                <div className="relative flex items-center">
                  <img
                    src="https://user-images.githubusercontent.com/74038190/212257468-1e9a91f1-b626-4baa-b15d-5c385dfa7ed2.gif"
                    alt=""
                    className="w-6 h-6 sm:w-10 sm:h-10"
                  />
                </div>
              </li>

              <li className="clients-item">
                <div className="relative flex items-center">
                  <img
                    src="https://user-images.githubusercontent.com/74038190/212257465-7ce8d493-cac5-494e-982a-5a9deb852c4b.gif"
                    alt=""
                    className="w-6 h-6 sm:w-10 sm:h-10"
                  />
                </div>
              </li>

              <li className="clients-item">
                <div className="relative flex items-center">
                  <img
                    src="https://user-images.githubusercontent.com/74038190/212257460-738ff738-247f-4445-a718-cdd0ca76e2db.gif"
                    alt=""
                    className="w-6 h-6 sm:w-10 sm:h-10"
                  />
                </div>
              </li>

              <li className="clients-item">
                <div className="relative flex items-center">
                  <img
                    src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif"
                    alt=""
                    className="w-6 h-6 sm:w-10 sm:h-10"
                  />
                </div>
              </li>

              <li className="clients-item">
                <div className="relative flex items-center">
                  <img
                    src="https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif"
                    alt=""
                    className="w-6 h-6 sm:w-10 sm:h-10"
                  />
                </div>
              </li>
              <li className="clients-item">
                <div className="relative flex items-center">
                  <img
                    src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/29fd6286-4e7b-4d6c-818f-c4765d5e39a9"
                    alt=""
                    className="w-6 h-6 sm:w-10 sm:h-10"
                  />
                </div>
              </li>
              <li className="clients-item">
                <div className="relative flex items-center">
                  <img
                    src="https://user-images.githubusercontent.com/74038190/212280805-9bcb336b-8c55-46a8-abf8-ff286ab55472.gif"
                    alt=""
                    className="w-6 h-6 sm:w-10 sm:h-10"
                  />
                </div>
              </li>
              <li className="clients-item">
                <div className="relative flex items-center">
                  <img
                    src="https://user-images.githubusercontent.com/74038190/212281775-b468df30-4edc-4bf8-a4ee-f52e1aaddc86.gif"
                    alt=""
                    className="w-6 h-6 sm:w-16 sm:h-10"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
