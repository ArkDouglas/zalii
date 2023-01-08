import classNames from "classnames/bind";
import Image from "next/image";
import Providers from "../Providers/Providers";
import styles from "./Authenticate.module.scss";
export default function Authenticate() {
  let cx = classNames.bind(styles);

  return (
    <>
      <div className="flex justify-center bg-slate-400">
        <div className="after:border bg-slate-50 border-slate-200 p-8 shadow-lg rounded-2xl">
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
          <Providers></Providers>
        </div>
      </div>
    </>
  );
}
