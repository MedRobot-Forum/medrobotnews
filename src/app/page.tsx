"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from 'next-themes';

interface Company {
  name: string;
  logo: string;
  url: string;
  indications: string;
  hasThirdCert?: boolean;
  isListed?: boolean;
}

interface RobotCategory {
  title: string;
  description: string;
  companies: Company[];
}

const robotCategories: RobotCategory[] = [
  {
    title: "关节机器人",
    description: "专注于关节置换手术的精准定位和手术规划,提供个性化的手术方案。",
    companies: [
      { 
        name: "天智航", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "https://www.tinavi.com",
        indications: "TKA/THA/UKA",
        hasThirdCert: true,
        isListed: true
      },
      { 
        name: "MAKO", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "https://www.stryker.com/us/en/joint-replacement/systems/mako-robotic-arm-assisted-surgery.html",
        indications: "TKA/THA/PKA"
      },
      { 
        name: "武汉联影智融", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.united-imaging.com",
        indications: "关节置换手术"
      },
      { 
        name: "北京爱康", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.aikang.com",
        indications: "关节置换手术"
      },
      { 
        name: "厦门大博", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.double-medical.com",
        indications: "关节置换手术"
      },
      { 
        name: "上海卓昕", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.zhuoxin.com",
        indications: "关节置换手术"
      },
      { 
        name: "苏州宽瑞智能", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.kuanrui.com",
        indications: "关节置换手术"
      },
      { 
        name: "北京纳通", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.natong.com",
        indications: "关节置换手术"
      },
      { 
        name: "上海爱乔", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.iqo.com",
        indications: "关节置换手术"
      },
      { 
        name: "北京埃斯顿", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.estun.com",
        indications: "关节置换手术"
      },
      { 
        name: "杭州邦杰星", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.bangjiexing.com",
        indications: "关节置换手术"
      },
      { 
        name: "苏州微创畅行", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.microport-cx.com",
        indications: "关节置换手术"
      },
      { 
        name: "杭州三坛", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.santan.com",
        indications: "关节置换手术"
      },
      { 
        name: "山东威高", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.weigao.com",
        indications: "关节置换手术"
      },
      { 
        name: "北京长木谷", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.changmugu.com",
        indications: "关节置换手术"
      },
      { 
        name: "杭州柳叶刀", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.scalpelrobot.com",
        indications: "关节置换手术"
      },
      { 
        name: "深圳骨圣元化", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.gushengyuanhua.com",
        indications: "关节置换手术"
      },
      { 
        name: "北京和华瑞博", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.hehuaruibo.com",
        indications: "关节置换手术"
      },
      { 
        name: "杭州键嘉", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.jianjia.com",
        indications: "关节置换手术"
      }
    ]
  },
  {
    title: "脊柱/创伤机器人",
    description: "辅助脊柱手术定位和螺钉植入,提高手术安全性和精确度。",
    companies: [
      { 
        name: "上海霖晏", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.linyan.com",
        indications: "脊柱手术"
      },
      { 
        name: "杭州三坛", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.santan.com",
        indications: "脊柱手术"
      },
      { 
        name: "上海卓昕", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.zhuoxin.com",
        indications: "脊柱手术"
      },
      { 
        name: "山东威高", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.weigao.com",
        indications: "脊柱手术"
      },
      { 
        name: "北京歌锐", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.gerui.com",
        indications: "脊柱手术"
      },
      { 
        name: "北京罗森博特", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.luosenbot.com",
        indications: "脊柱手术"
      },
      { 
        name: "宁波华科润", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.huakerun.com",
        indications: "脊柱手术"
      },
      { 
        name: "常州维卓致远", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.weizhuo.com",
        indications: "脊柱手术"
      },
      { 
        name: "捷迈邦美", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.zimmerbiomet.com",
        indications: "脊柱手术"
      },
      { 
        name: "上海嘉奥", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.jiaao.com",
        indications: "脊柱手术"
      },
      { 
        name: "苏州铸正", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.zhuzheng.com",
        indications: "脊柱手术"
      },
      { 
        name: "重庆博士康", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.boshikang.com",
        indications: "脊柱手术"
      },
      { 
        name: "北京天智航", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.tinavi.com",
        indications: "脊柱手术"
      },
      { 
        name: "上海极睿", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.jirui.com",
        indications: "脊柱手术"
      },
      { 
        name: "深圳安科高", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.ankegao.com",
        indications: "脊柱手术"
      },
      { 
        name: "安徽埃克索", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.aikesuo.com",
        indications: "脊柱手术"
      },
      { 
        name: "南京普爱", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.puai.com",
        indications: "脊柱手术"
      },
      { 
        name: "南京佗道", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.tuodao.com",
        indications: "脊柱手术"
      },
      { 
        name: "合肥美亚", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.meiya.com",
        indications: "脊柱手术"
      },
      { 
        name: "深圳鑫君特智能", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.xinjunte.com",
        indications: "脊柱手术"
      }
    ]
  },
  {
    title: "腔镜机器人",
    description: "提供稳定的三维视野和灵活的操作,实现微创腔镜手术。",
    companies: [
      { 
        name: "Intuitive Surgical", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "https://www.intuitive.com/",
        indications: "腹腔镜手术/胸腔镜手术",
        hasThirdCert: true,
        isListed: true
      },
      { 
        name: "妙手医疗", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.mirosmart.com",
        indications: "腹腔镜手术/胸腔镜手术",
        hasThirdCert: true
      },
      { 
        name: "微创医疗", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "https://www.microport.com",
        indications: "腹腔镜手术/胸腔镜手术",
        hasThirdCert: true,
        isListed: true
      },
      { 
        name: "威高医疗", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.weigaogroup.com",
        indications: "腹腔镜手术/胸腔镜手术",
        hasThirdCert: true,
        isListed: true
      },
      { 
        name: "北京赛诺微", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.sinowemed.com",
        indications: "腹腔镜手术/胸腔镜手术"
      },
      { 
        name: "上海瑞龙诺赋", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.ruilongrobot.com",
        indications: "腹腔镜手术/胸腔镜手术"
      },
      { 
        name: "深圳康诺斯腾", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.connectsurg.com",
        indications: "腹腔镜手术/胸腔镜手术"
      },
      { 
        name: "南京佗道", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.tuodao.com",
        indications: "腹腔镜手术/胸腔镜手术"
      },
      { 
        name: "苏州康多", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.candorobot.com",
        indications: "腹腔镜手术/胸腔镜手术"
      },
      { 
        name: "北京术锐", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.surgrobot.com",
        indications: "腹腔镜手术/胸腔镜手术"
      },
      { 
        name: "深圳精锋", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.jingfeng.com",
        indications: "腹腔镜手术/胸腔镜手术"
      }
    ]
  },
  {
    title: "口腔机器人",
    description: "应用于口腔种植、正畸等领域,实现微创精准的口腔治疗。",
    companies: [
      { 
        name: "北京柏惠维康", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.biobot.cn",
        indications: "口腔种植"
      },
      { 
        name: "北京雅客智慧", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.yakemdt.com",
        indications: "口腔种植"
      },
      { 
        name: "杭州柳叶刀", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.scalpelrobot.com",
        indications: "口腔种植"
      },
      { 
        name: "杭州键嘉", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.jianjia.com",
        indications: "口腔种植"
      },
      { 
        name: "上海舍成", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.shecheng.com",
        indications: "口腔种植"
      },
      { 
        name: "北京极限人工智能", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.jixianai.com",
        indications: "口腔种植"
      },
      { 
        name: "苏州迪凯尔", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.dikaier.com",
        indications: "口腔种植"
      },
      { 
        name: "四川锋准", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.fengzhun.com",
        indications: "口腔种植"
      },
      { 
        name: "上海术之道", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.shuzhidao.com",
        indications: "口腔种植"
      }
    ]
  },
  {
    title: "神外机器人",
    description: "协助开展精准的神经外科手术,最大程度保护重要神经组织。",
    companies: [
      { 
        name: "华志微创", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.huazhi.com",
        indications: "颅内肿瘤/DBS/癫痫"
      },
      { 
        name: "捷迈邦美", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.zimmerbiomet.com",
        indications: "颅内肿瘤/DBS/癫痫"
      },
      { 
        name: "上海复旦数字", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.fudan-digital.com",
        indications: "颅内肿瘤/DBS/癫痫"
      },
      { 
        name: "北京艾瑞迈迪", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.irimedi.com",
        indications: "颅内肿瘤/DBS/癫痫"
      },
      { 
        name: "深圳安科高", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.ankegao.com",
        indications: "颅内肿瘤/DBS/癫痫"
      },
      { 
        name: "武汉联影智融", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.united-imaging.com",
        indications: "颅内肿瘤/DBS/癫痫"
      },
      { 
        name: "北京华科精准", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.huake.com",
        indications: "颅内肿瘤/DBS/癫痫"
      },
      { 
        name: "北京柏惠维康", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.biobot.cn",
        indications: "颅内肿瘤/DBS/癫痫"
      }
    ]
  },
  {
    title: "穿刺机器人",
    description: "用于精准穿刺定位,广泛应用于活检和微创治疗。",
    companies: [
      { 
        name: "苏州朗开", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.langkai.com",
        indications: "肺结节活检/肝脏消融"
      },
      { 
        name: "北京新博", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.xinbo.com",
        indications: "肺结节活检/肝脏消融"
      },
      { 
        name: "上海爱立峰", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.ailifeng.com",
        indications: "肺结节活检/肝脏消融"
      },
      { 
        name: "上海精励", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.jingli.com",
        indications: "肺结节活检/肝脏消融"
      },
      { 
        name: "上海介航", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.jiehang.com",
        indications: "肺结节活检/肝脏消融"
      },
      { 
        name: "上海复旦数字", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.fudan-digital.com",
        indications: "肺结节活检/肝脏消融"
      },
      { 
        name: "北京奥达智声", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.aodazhisheng.com",
        indications: "肺结节活检/肝脏消融"
      },
      { 
        name: "苏州医达极星", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.yidajixing.com",
        indications: "肺结节活检/肝脏消融"
      },
      { 
        name: "深圳先健科技", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.xianjian.com",
        indications: "肺结节活检/肝脏消融"
      },
      { 
        name: "上海睿触", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.ruichu.com",
        indications: "肺结节活检/肝脏消融"
      },
      { 
        name: "北京艾瑞迈迪", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.irimedi.com",
        indications: "肺结节活检/肝脏消融"
      },
      { 
        name: "南京佗道", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.tuodao.com",
        indications: "肺结节活检/肝脏消融"
      },
      { 
        name: "北京真健康", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.zhenjiankang.com",
        indications: "肺结节活检/肝脏消融"
      }
    ]
  },
  {
    title: "眼科机器人",
    description: "辅助开展精准的眼科手术，实现微创精准的眼科治疗，提高手术安全性。",
    companies: [
      { 
        name: "迪视医疗", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.dision-medical.com",
        indications: "白内障手术"
      },
      { 
        name: "衔微医疗", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.xwmedical.com",
        indications: "白内障手术"
      },
      { 
        name: "微眸医疗", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.weimou.com",
        indications: "白内障手术"
      }
    ]
  },
  {
    title: "血管介入机器人",
    description: "实现血管介入手术的精准导航和器械操控，提高手术安全性和效率。",
    companies: [
      { 
        name: "柏惠维康", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.biobot-surgical.com",
        indications: "外周血管/冠脉介入/神经介入"
      }
    ]
  },
  {
    title: "经自然腔道机器人",
    description: "通过人体自然腔道进行微创手术，降低手术创伤，加快术后恢复。",
    companies: [
      { 
        name: "安翰医疗", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.ankonmed.com",
        indications: "胃镜检查/结肠镜检查"
      },
      { 
        name: "康多机器人", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.condorobot.com",
        indications: "经尿道前列腺手术/膀胱肿瘤手术"
      }
    ]
  },
  {
    title: "水刀机器人",
    description: "利用高压水流进行精准切割和清创，适用于多种软组织手术，创伤小恢复快。",
    companies: [
      { 
        name: "智愈医疗", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.zhiyu-medical.com",
        indications: "前列腺增生"
      }
    ]
  },
  {
    title: "植发机器人",
    description: "实现自动化毛囊单位提取和种植,提高植发效率和存活率。",
    companies: [
      { 
        name: "上海磅策", 
        logo: "/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg",
        url: "http://www.poundstrategy.com",
        indications: "毛囊提取",
        isListed: true
      }
    ]
  }
];

interface UpstreamCompany {
  name: string;
  logo: string;
  url: string;
  indications: string;
}

interface UpstreamCategory {
  title: string;
  description: string;
  companies: UpstreamCompany[];
}

const upstreamCategories: UpstreamCategory[] = [
  {
    title: "机械臂",
    description: "高精度工业机械臂及控制系统",
    companies: [
      {
        name: "发那科",
        logo: "/images/vendors/fanuc.png",
        url: "https://www.fanuc.co.jp/",
        indications: "工业机器人全球领导者"
      },
      {
        name: "库卡",
        logo: "/images/vendors/kuka.png",
        url: "https://www.kuka.com/",
        indications: "德国工业机器人巨头"
      }
    ]
  },
  {
    title: "光学系统",
    description: "高清内窥镜及成像系统",
    companies: [
      {
        name: "奥林巴斯",
        logo: "/images/vendors/olympus.png",
        url: "https://www.olympus-global.com/",
        indications: "内窥镜全球领先"
      },
      {
        name: "史赛克",
        logo: "/images/vendors/stryker.png",
        url: "https://www.stryker.com/",
        indications: "医疗器械创新者"
      }
    ]
  },
  {
    title: "手术器械",
    description: "专业手术器械及耗材供应",
    companies: [
      {
        name: "强生医疗",
        logo: "/images/vendors/jnj.png",
        url: "https://www.jnj.com/",
        indications: "全球医疗器械领军企业"
      },
      {
        name: "美敦力",
        logo: "/images/vendors/medtronic.png",
        url: "https://www.medtronic.com/",
        indications: "创新医疗技术先驱"
      }
    ]
  },
  {
    title: "动物实验",
    description: "手术机器人临床前研究服务",
    companies: [
      {
        name: "昭衍新药",
        logo: "/images/vendors/joinn.png",
        url: "http://www.joinn-lab.com/",
        indications: "国内领先CRO机构"
      },
      {
        name: "康龙化成",
        logo: "/images/vendors/pharmaron.png",
        url: "https://www.pharmaron.com/",
        indications: "一站式研发服务平台"
      }
    ]
  },
  {
    title: "检测注册",
    description: "医疗器械检测与注册服务",
    companies: [
      {
        name: "泰尔实验室",
        logo: "/images/vendors/teil.png",
        url: "http://www.teil.com.cn/",
        indications: "医疗器械权威检测机构"
      },
      {
        name: "华光认证",
        logo: "/images/vendors/cqc.png",
        url: "https://www.cqc.com.cn/",
        indications: "医疗器械认证专家"
      }
    ]
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center py-8 space-y-6">
        <div className="relative">
          <TypeAnimation
            sequence={[
              '本网站由良医医疗冠名支持',
              2000,
              '',
              500,
            ]}
            wrapper="h1"
            speed={80}
            deletionSpeed={99}
            className="text-5xl font-bold tracking-tight inline-block bg-gradient-to-r from-[#40E0F0] via-[#1E90FF] to-[#40E0F0] text-transparent bg-clip-text animate-gradient"
            repeat={Infinity}
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
          />
        </div>
        <div 
          className="text-xl text-gray-600"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
          良医公司的使命是发明、设计和制造独特、高质量的骨科手术器械，帮助医生更精准的完成手术
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {robotCategories.map((robot, index) => (
          <div 
            key={index}
            className="group bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-[#40E0F0]">
                {robot.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {robot.description}
              </p>
              <div className="border-t pt-4">
                <div className="grid grid-cols-3 gap-4">
                  {robot.companies.map((company, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <Link 
                        href={company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                      >
                        <span className="text-sm text-gray-400">
                          {company.name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {upstreamCategories.map((category, index) => (
          <div 
            key={index}
            className="group bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-[#40E0F0]">
                {category.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {category.description}
              </p>
              <div className="border-t pt-4">
                <div className="grid grid-cols-3 gap-4">
                  {category.companies.map((company, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <Link 
                        href={company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                      >
                        <span className="text-sm text-gray-400">
                          {company.name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
