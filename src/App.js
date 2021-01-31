import React, { useState } from 'react';
import { Radio, Layout, Space, Input, Typography, Card, Button, PageHeader } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './App.css';
const { Header, Footer, Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;
const { Search } = Input;

function App() {
  const [value, setValue] = useState('2')
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <Layout>
        <Header className="App-header">
          <PageHeader className="site-page-header" title="AMTICA"
            extra={[
              <a href="#login/signup" key="2">Login / Sign-up</a>,
              <a href="#cart" key="1">
                Cart <ShoppingCartOutlined />
              </a>,
            ]} />
        </Header>
        <Content>
          <div className='top-content'>
            <div className="overlay"></div>
            <div className="content">
              <h1>Find Great Deals Customized For Your Need</h1>
              <Search placeholder="Search service or product" />
              <div className="search-filter">
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1}>Product</Radio>
                  <Radio value={2}>Service</Radio>
                  <Radio value={3}>Jobs</Radio>
                </Radio.Group>
                <a href='#advancedsearch' className='ad-search'>Advanced Search</a>
              </div>
            </div>
          </div>
          <Space direction="vertical">
            <Card
              className="card1"
              bordered={false}
              cover={<img alt='example' src="/image.jpg" />}
            >
              <Meta
                title="Title"
                description={<>
                  No matter how far along you are in your sophistication as an amateur.<br />
                  <Button>Discover</Button>
                </>}
              />
              <div className='right-content'>
                Seller Name
                <br /><p>Westbengal, Kolkata</p>
              </div>
            </Card>
            <Card
              className='card2'
              bordered={false}
              cover={<img alt='example' src="/image.jpg" />}
            >
              <div className='card-body'>
                <Title level={3}>Title</Title>
                <div className="desc">No matter how far along you are in your sophistication as an amateur.</div>
                <Button>Discover</Button>
              </div>
            </Card>
          </Space>
        </Content>
        <Footer className="footer">
          <div className="space-align-container">
            <div className="space-align-block">
              <Space align="start">
                <div>
                  <Title>AMTICA</Title>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </Space>
            </div>
            <div className="space-align-block">
              <Space align="start">
                <div>
                  <Title level={5}>Sitemap</Title>
                  <a href='#home'>Home</a><br />
                  <a href='#seller'>Seller</a><br />
                  <a href='#buyer'>Buyer</a><br />
                  <a href='#search'>Search</a>
                </div>
              </Space>
            </div>
            <div className="space-align-block">
              <Space align="start">
                <div>
                  <Title level={5}>Services</Title>
                  <a href='#help'>Help</a><br />
                  <a href='#requestafeature'>Request a Feature</a><br />
                  <a href='#termsandpolicy'>Terms and Policy</a>
                </div>
              </Space>
            </div>
            <div className="space-align-block">
              <Space align="start">
                <div>
                  <Title level={5}>For users</Title>
                  <a href='#login'>Login</a><br />
                  <a href='#register'>Register</a><br />
                  <a href='#myorders'>My Orders</a>
                </div>
              </Space>
            </div>
            <div className="space-align-block">
              <Space align="start">
                <div>
                  <Title level={5}>Our App</Title>
                  <span><img alt='example' src="/playstore.png" /></span><br />
                  <span><img alt='example' src="/google.png" /></span>
                </div>
              </Space>
            </div>
          </div>
          <div className="main">
            <div>
              ©2020 Amtica. All rights reserved.
            </div>
            <div>
              <a href="#privacy">Privacy & Cookies</a>&nbsp;&nbsp;
              <a href="#accessibility">Accessibility</a>
            </div>
          </div>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
