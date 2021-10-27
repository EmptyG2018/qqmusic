import MainStyle from "./Main.module.less";

const Main = ({ children }) => {

  return (
    <div className={MainStyle.main}>
      {children}
    </div>
  );
}

export default Main;