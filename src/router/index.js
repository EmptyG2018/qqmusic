import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { AsideMenu, Main, Header, View, PlayBar } from "../layouts";
import Recommend from "../views/Recommend";
import MusicHall from "../views/MusicHall";
import Video from "../views/Video";
import FM from "../views/FM";
import Live from "../views/Live";
import Local from "../views/Local";
import Download from "../views/Download";
import Lately from "../views/Lately";
import Cloud from "../views/Cloud";
import AppStyle from "../App.module.less";

const RouterMap = () => {
  return (
    <Router>
      <div className={AppStyle.App}>
        <AsideMenu />
        <Main>
          <Header />
          <View>            
            <Switch>
              {/* 推荐 */}
              <Route exact path="/recommend" component={Recommend} />
              {/* 音乐馆 */}
              <Route exact path="/music_hall" component={MusicHall} />
              {/* 视频 */}
              <Route exact path="/video" component={Video} />
              {/* 电台 */}
              <Route exact path="/fm" component={FM} />
              {/* 我喜欢 */}
              <Route exact path="/live" component={Live} />
              {/* 本地歌曲 */}
              <Route exact path="/local" component={Local} />
              {/* 下载歌曲 */}
              <Route exact path="/download" component={Download} />
              {/* 最近播放 */}
              <Route exact path="/lately" component={Lately} />
              {/* 微云音乐网盘 */}
              <Route exact path="/cloud" component={Cloud} />
              {/* 重定向至推荐页面 */}
              <Redirect to="/recommend" />
            </Switch>
          </View>
          <PlayBar />
        </Main>
      </div>
    </Router>
  )
}

export default RouterMap;