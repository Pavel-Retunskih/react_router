import styles from "./components/Site.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { S } from "./components/pages/_styles";
import { PATH } from "./routing/router";
function App() {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper>
            <NavLink to={PATH.PAGE1}>Adidas</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PAGE2}>Puma</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PAGE3}>Abibas</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PAGE4}>Prices</NavLink>
          </S.NavWrapper>
        </div>
        <div className={styles.content}>
          <Outlet />
          {/* <Routes>
            <Route path={PATH.PAGE1} element={<Adidas />} />
            <Route path="/" element={<Navigate to={PATH.PAGE1} />} />
            <Route path={PATH.PAGE2} element={<Puma />} />
            <Route path={PATH.PAGE3} element={<Abibas />} />
            <Route path={PATH.PAGE4} element={<Prices />} />
            <Route path={PATH.MODEL} element={<Model />} />

            <Route path={PATH.ERROR} element={<Error404 />} />
            <Route path="/*" element={<Navigate to={PATH.ERROR} />} />
          </Routes> */}
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

export default App;
