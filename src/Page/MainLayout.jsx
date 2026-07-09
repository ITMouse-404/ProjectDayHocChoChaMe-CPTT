import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: Array.from({ length: 4 }).map((_, j) => ({
        key: index * 4 + j + 1,
        label: `option${index * 4 + j + 1}`,
      })),
    };
  }
);

export default function MainLayout() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const currentYear = new Date().getFullYear();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items1}
          style={{ flex: 1 }}
        />
      </Header>

      <div style={{ padding: "0 48px" }}>
        <Breadcrumb
          items={[
            { title: "Home" },
            { title: "List" },
            { title: "App" },
          ]}
          style={{ margin: "16px 0" }}
        />

        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
              mode="inline"
              defaultOpenKeys={["sub1"]}
              items={items2}
            />
          </Sider>

          <Content style={{ padding: "0 24px" }}>
            Nội dung của bạn
          </Content>
        </Layout>
      </div>

      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{currentYear}
      </Footer>
    </Layout>
  );
}