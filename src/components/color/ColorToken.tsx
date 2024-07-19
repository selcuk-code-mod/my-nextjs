import { Button, ConfigProvider, Space } from "antd";
import React from "react";

const ColorToken = ({
  colorPrimary = "#012030",
  colorBackground = "#e5e5e5",
  children,
}: any) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: colorPrimary,

        colorBgContainer: colorBackground,
      },
    }}
  >
    <Space>{children}</Space>
  </ConfigProvider>
);

export default ColorToken;
