
import { ReactComponent as SomeSvg } from '../../../public/svgs/mysql.svg';

export const Tooling = () => {
  return (
    <div
      // center the content
      className="flex flex-col justify-center items-center bg-slate-100 w-full"
      style={{
        height: "100vh",
      }}
    >
      <div className="flex flex-col justify-center items-center bg-slate-800 w-2/3 h-1/2 rounded-lg shadow-lg tooling-border">
        <div className="flex flex-col justify-center items-center bg-slate-800 rounded-lg shadow-lg tooling-small-boxes"></div>
        <div className="icons">
      
        </div>
      </div>
    </div>
  );
};
