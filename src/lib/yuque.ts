import axios from 'axios';

interface YuqueConfig {
  token: string;
  namespace: string;
  tag: string;
}

const config: YuqueConfig = {
  token: process.env.YUQUE_TOKEN || '',
  namespace: process.env.YUQUE_NAMESPACE || '',
  tag: '手术机器人中标'
};

export async function fetchLatestBiddingInfo() {
  try {
    const response = await axios.get(
      `https://www.yuque.com/api/v2/repos/${config.namespace}/docs`,
      {
        headers: {
          'X-Auth-Token': config.token,
          'Content-Type': 'application/json'
        },
        params: {
          tag: config.tag
        }
      }
    );

    const docs = response.data.data;
    if (!docs || docs.length === 0) {
      return null;
    }

    // 获取最新的文档
    const latestDoc = docs[0];
    
    // 获取文档详情
    const detailResponse = await axios.get(
      `https://www.yuque.com/api/v2/repos/${config.namespace}/docs/${latestDoc.slug}`,
      {
        headers: {
          'X-Auth-Token': config.token,
          'Content-Type': 'application/json'
        }
      }
    );

    return {
      title: latestDoc.title,
      content: detailResponse.data.data.body,
      date: new Date(latestDoc.created_at),
      link: `https://www.yuque.com/${config.namespace}/docs/${latestDoc.slug}`
    };
  } catch (error) {
    console.error('获取语雀数据失败:', error);
    return null;
  }
} 