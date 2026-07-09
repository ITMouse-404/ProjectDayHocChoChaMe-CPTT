import React from "react";
import "../App.css";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const items1 = ["Trang chủ", "Khóa học", "Diễn đàn"].map((label, index) => ({
  key: String(index + 1),
  label,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `Danh mục ${key}`,
      children: Array.from({ length: 4 }).map((_, j) => ({
        key: `${index}-${j}`,
        label: `Mục ${j + 1}`,
      })),
    };
  }
);

const MainLayout = () =>{
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const currentYear = new Date().getFullYear();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items1}
          style={{ flex: 1 }}
        />
      </Header>

      <div style={{ padding: "0 48px" }}>
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[
            { title: "Home" },
            { title: "CPTT" },
          ]}
        />

        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            width={220}
            style={{ background: colorBgContainer }}
          >
            <Menu
              mode="inline"
              defaultOpenKeys={["sub1"]}
              defaultSelectedKeys={["0-0"]}
              style={{ height: "100%" }}
              items={items2}
            />
          </Sider>

          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            {/* Hero */}
            <section id="center">
              <div className="hero">
                <img
                  src={heroImg}
                  className="base"
                  width="170"
                  height="179"
                  alt=""
                />

                <img
                  src={reactLogo}
                  className="framework"
                  alt="React logo"
                />

                <img
                  src={viteLogo}
                  className="vite"
                  alt="Vite logo"
                />

                <h3 className="YC">
                  &gt;&gt;Nhân vật của bạn&lt;&lt;
                </h3>
              </div>
            </section>

            <div className="ticks"></div>

            {/* Social */}
            <section id="next-steps">
              <div id="social">
                <svg
                  className="icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#social-icon"></use>
                </svg>

                <h2 style={{color:"blue"}}>Connect with us</h2>

                <p>Join the CPTT community</p>

                <ul>
                  <li>
                    <a
                      href="https://github.com/vitejs/vite"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="button-icon"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <use href="/icons.svg#github-icon"></use>
                      </svg>
                      GitHub
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://chat.vite.dev/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="button-icon"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <use href="/icons.svg#discord-icon"></use>
                      </svg>
                      Discord
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://x.com/vite_js"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="button-icon"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <use href="/icons.svg#x-icon"></use>
                      </svg>
                      X.com
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://bsky.app/profile/vite.dev"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="button-icon"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <use href="/icons.svg#bluesky-icon"></use>
                      </svg>
                      Bluesky
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <div className="ticks"></div>

            <section id="spacer"></section>
          </Content>
        </Layout>
      </div>

      <Footer style={{ textAlign: "center" }}>
        CPTT ©{currentYear}
      </Footer>
    </Layout>
  );
}

export default MainLayout;