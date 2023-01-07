import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./Authenticate.module.scss";
export default function Authenticate() {
  let cx = classNames.bind(styles);

  return (
    <>
      <div className="flex justify-center">
        <div className="after:border border-slate-200 p-8 shadow-lg rounded-2xl =">
          <div className="container mx-auto">
            <ul role="list" className="list w-list-unstyled text-center ">
              <li>
                <div className="lc-textblock">Your Story, Your way</div>
              </li>
              <li>
                <div className="lc-textblock">100% Happiness Guaranteed</div>
              </li>
            </ul>
          </div>
          <div className="container">
            <Image
              src="/Image.png"
              width={600}
              height={200}
              responsive
              objectFit="cover"
            />
          </div>
          <div
            id="social-logins"
            className="container mt-4 justify-center flex flex-col py-10 px-10 mx-0 min-w-full"
          >
            <div className="container flex flex-col items-center">
              <button
                href="#"
                className="mt-4 w-full rounded-lg justify-between hover:bg-blue-200 bg-blue-500 w-inline-block mx-auto py-2 px-4  text-white"
              >
                <Image
                  src="/Google-Icon.png"
                  className="google-icon bg-white rounded-lg"
                  width="30"
                  height="30"
                />
                <div className="w-inline-block mx-4 my-2">
                  Log In with google
                </div>
              </button>
            </div>
            <div className="container flex flex-col items-center">
              <button
                href="#"
                className="mt-4 w-full rounded-lg justify-between hover:bg-blue-200 bg-blue-900 w-inline-block mx-auto py-2 px-4  text-white"
              >
                <Image
                  src="/FB-Icon.png"
                  loading="lazy"
                  alt="Google icon"
                  className="fb-icon rounded-lg"
                  width="30"
                  height="30"
                />
                <div className="w-inline-block mx-4 my-2">
                  Log In with FaceBook
                </div>
              </button>
            </div>
            <div className="container flex flex-col items-center">
              <button
                href="#"
                className="mt-4 w-full rounded-lg justify-between hover:bg-gray-600 bg-black w-inline-block mx-auto py-2 px-4  text-white"
              >
                <Image
                  src="/Apple-Icon.png"
                  loading="lazy"
                  alt="Google icon"
                  className="apple-icon rounded-lg"
                  width="30"
                  height="30"
                />
                <div className="w-inline-block mx-4 my-2">
                  Log In with APPLE
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
