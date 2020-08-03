import * as React from 'react';
import { Layout, Menu, Card, Row, Col } from 'antd';
import menus from './nav-config.js';
import './style.scss';

const { Content, Footer, Sider } = Layout;

const Home = () => {
  const clickMenu = (evnet) => {
    const titleId = evnet.key;
    document.getElementById(titleId).scrollIntoView(true);
  }

  const renderMenu = () => menus.map(menu => (
    <Menu.Item key={menu.id} >{menu.name}</Menu.Item>
  ));

  const renderLinks = (links) => links && links.map(link => (
    <Col span={4}>
      <a className="link-item" href={link.link} key={link.name} target="blank">
        <div className="link-title">{link.name}</div>
        <div className="link-bref">{link.bref}</div>
      </a>
    </Col>
  ));

  const renderMainContainer = () => menus.map(menu => {
    return (
      <Card
        title={
          <h2
            id={menu.id}className="title"
            key={`title-${menu.id}`}
          ><span># </span>{menu.name}</h2>
        }
        style={{ width: '100%', marginBottom: '20px', borderRadius: '8px' }}
      >
        <Row gutter={[16, 24]}>
          {renderLinks(menu.links)}
        </Row>
      </Card>
    )
  });

  return <Layout className="home-page">
    <Sider className="slider">
      <div className="logo">学习网站导航</div>
      <Menu theme="dark" onClick={clickMenu} mode="inline" defaultSelectedKeys={[menus[0].id]}>
        {renderMenu()}
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Content className="layout-content">
        <div className="site-layout-background" id="main-container">
          {renderMainContainer()}
        </div>
      </Content>
      <Footer className="footer">Navigate Web @2020</Footer>
    </Layout>
  </Layout>
}

export default Home;