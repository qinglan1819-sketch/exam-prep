// ==================== 自考题库配置（2科：新思想+近代史，每科30题）====================

const SUBJECTS = [
    {
        id: 'politics',
        code: '15040',
        name: '新思想',
        icon: '💡',
        color: 'politics',
        levels: [
            // Day 1-3: 新时代与主要矛盾
            { id: 'po_1', name: 'Day1', title: '新时代与主要矛盾', question: '中国特色社会主义进入新时代的标志是？', options: ['改革开放','党的十八大','党的十九大','新中国成立'], answer: 1, explanation: '党的十八大(2012年)标志着中国特色社会主义进入新时代。' },
            { id: 'po_2', name: 'Day1', title: '新时代与主要矛盾', question: '新时代我国社会主要矛盾是？', options: ['人民日益增长的物质文化需要','人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾','阶级矛盾','经济发展矛盾'], answer: 1, explanation: '十九大明确指出：人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。' },
            { id: 'po_3', name: 'Day1', title: '新时代与主要矛盾', question: '中国特色社会主义最本质的特征是？', options: ['改革开放','社会主义市场经济','中国共产党领导','人民民主专政'], answer: 2, explanation: '中国共产党领导是中国特色社会主义最本质的特征。' },
            { id: 'po_4', name: 'Day1', title: '新时代与主要矛盾', question: '我国发展新的历史方位是？', options: ['社会主义初级阶段','中国特色社会主义新时代','全面建成小康社会','全面建设社会主义现代化国家'], answer: 1, explanation: '中国特色社会主义新时代是我国发展新的历史方位。' },
            { id: 'po_5', name: 'Day1', title: '新时代与主要矛盾', question: '党的十九大报告提出的"两个没有变"是指？', options: ['我国仍处于并将长期处于社会主义初级阶段的基本国情没有变，我国是世界最大发展中国家的国际地位没有变','我国社会主要矛盾没有变，我国基本国情没有变','我国改革开放政策没有变，我国外交政策没有变','我国经济发展方式没有变，我国产业结构没有变'], answer: 0, explanation: '"两个没有变"：我国仍处于并将长期处于社会主义初级阶段的基本国情没有变，我国是世界最大发展中国家的国际地位没有变。' },
            { id: 'po_6', name: 'Day2', title: '新时代与主要矛盾', question: '社会主义初级阶段的基本路线是？', options: ['一个中心、两个基本点','四项基本原则','改革开放','以经济建设为中心'], answer: 0, explanation: '"一个中心、两个基本点"是社会主义初级阶段的基本路线。' },
            { id: 'po_7', name: 'Day2', title: '新时代与主要矛盾', question: '新时代坚持和发展中国特色社会主义的总任务是？', options: ['全面建成小康社会','实现社会主义现代化和中华民族伟大复兴','实现共同富裕','建设社会主义现代化强国'], answer: 1, explanation: '总任务是实现社会主义现代化和中华民族伟大复兴。' },
            { id: 'po_8', name: 'Day2', title: '新时代与主要矛盾', question: '党的基本路线是党和国家的生命线，必须长期坚持不动摇。这是由什么决定的？', options: ['党的性质','社会主义初级阶段的基本国情','人民的意愿','国际形势'], answer: 1, explanation: '由社会主义初级阶段的基本国情决定的。' },
            { id: 'po_9', name: 'Day2', title: '新时代与主要矛盾', question: '我国社会主要矛盾的变化是？', options: ['根本性的变化','历史性的变化','关系全局的历史性变化','阶段性的变化'], answer: 2, explanation: '我国社会主要矛盾的变化是关系全局的历史性变化。' },
            { id: 'po_10', name: 'Day2', title: '新时代与主要矛盾', question: '社会主义初级阶段至少需要多长时间？', options: ['50年','100年','上百年','200年'], answer: 2, explanation: '社会主义初级阶段至少需要上百年时间。' },
            // Day 3-4: 中国梦与两个百年
            { id: 'po_11', name: 'Day3', title: '中国梦与两个百年', question: '中国梦的核心内涵是？', options: ['个人富裕','中华民族伟大复兴','GDP世界第一','科技领先'], answer: 1, explanation: '中国梦=中华民族伟大复兴。' },
            { id: 'po_12', name: 'Day3', title: '中国梦与两个百年', question: '第二个百年奋斗目标是？', options: ['建党100年全面建成小康社会','建国100年全面建成社会主义现代化强国','建军100年','改革开放100年'], answer: 1, explanation: '建国100年全面建成社会主义现代化强国。' },
            { id: 'po_13', name: 'Day3', title: '中国梦与两个百年', question: '第一个百年奋斗目标是？', options: ['建党100年全面建成小康社会','建国100年全面建成社会主义现代化强国','建军100年','改革开放100年'], answer: 0, explanation: '建党100年全面建成小康社会（已实现）。' },
            { id: 'po_14', name: 'Day3', title: '中国梦与两个百年', question: '中国梦的本质是？', options: ['国家富强、民族振兴、人民幸福','经济发展、社会进步、文化繁荣','政治民主、生态文明、世界和平','科技创新、教育强国、国防强大'], answer: 0, explanation: '中国梦的本质是国家富强、民族振兴、人民幸福。' },
            { id: 'po_15', name: 'Day3', title: '中国梦与两个百年', question: '实现中国梦必须走什么道路？', options: ['资本主义道路','中国特色社会主义道路','民主社会主义道路','新民主主义道路'], answer: 1, explanation: '实现中国梦必须走中国特色社会主义道路。' },
            { id: 'po_16', name: 'Day4', title: '中国梦与两个百年', question: '实现中国梦必须弘扬什么精神？', options: ['以爱国主义为核心的民族精神和以改革创新为核心的时代精神','集体主义精神','个人主义精神','国际主义精神'], answer: 0, explanation: '必须弘扬以爱国主义为核心的民族精神和以改革创新为核心的时代精神。' },
            { id: 'po_17', name: 'Day4', title: '中国梦与两个百年', question: '实现中国梦必须凝聚什么力量？', options: ['政府力量','军队力量','中国力量','知识分子力量'], answer: 2, explanation: '实现中国梦必须凝聚中国力量。' },
            { id: 'po_18', name: 'Day4', title: '中国梦与两个百年', question: '"两个一百年"奋斗目标中的第一个百年是指？', options: ['2020年','2021年','2035年','2049年'], answer: 1, explanation: '第一个百年是2021年建党100周年。' },
            { id: 'po_19', name: 'Day4', title: '中国梦与两个百年', question: '从2020年到2035年，我国发展的目标是？', options: ['全面建成小康社会','基本实现社会主义现代化','建成社会主义现代化强国','实现中华民族伟大复兴'], answer: 1, explanation: '从2020年到2035年，在全面建成小康社会的基础上，基本实现社会主义现代化。' },
            { id: 'po_20', name: 'Day4', title: '中国梦与两个百年', question: '从2035年到本世纪中叶，我国发展的目标是？', options: ['全面建成小康社会','基本实现社会主义现代化','建成富强民主文明和谐美丽的社会主义现代化强国','实现中华民族伟大复兴'], answer: 2, explanation: '从2035年到本世纪中叶，建成社会主义现代化强国。' },
            // Day 5-7: 五位一体
            { id: 'po_21', name: 'Day5', title: '五位一体总体布局', question: '"五位一体"总体布局包括？', options: ['经济、政治、文化、社会、生态文明建设','经济、政治、军事、文化、社会建设','经济、政治、文化、社会、党的建设','改革、发展、稳定、安全、生态建设'], answer: 0, explanation: '五位一体=经济建设+政治建设+文化建设+社会建设+生态文明建设。' },
            { id: 'po_22', name: 'Day5', title: '五位一体总体布局', question: '在"五位一体"中，什么建设是根本？', options: ['经济建设','政治建设','文化建设','社会建设'], answer: 0, explanation: '经济建设是根本。' },
            { id: 'po_23', name: 'Day5', title: '五位一体总体布局', question: '在"五位一体"中，什么建设是保证？', options: ['经济建设','政治建设','文化建设','生态文明建设'], answer: 1, explanation: '政治建设是保证。' },
            { id: 'po_24', name: 'Day5', title: '五位一体总体布局', question: '在"五位一体"中，什么建设是灵魂？', options: ['经济建设','政治建设','文化建设','社会建设'], answer: 2, explanation: '文化建设是灵魂。' },
            { id: 'po_25', name: 'Day6', title: '五位一体总体布局', question: '在"五位一体"中，什么建设是条件？', options: ['经济建设','政治建设','社会建设','生态文明建设'], answer: 2, explanation: '社会建设是条件。' },
            { id: 'po_26', name: 'Day6', title: '五位一体总体布局', question: '在"五位一体"中，什么建设是基础？', options: ['经济建设','文化建设','社会建设','生态文明建设'], answer: 3, explanation: '生态文明建设是基础。' },
            { id: 'po_27', name: 'Day6', title: '五位一体总体布局', question: '新发展理念中，什么是第一动力？', options: ['协调','创新','绿色','开放'], answer: 1, explanation: '创新是引领发展的第一动力。' },
            { id: 'po_28', name: 'Day6', title: '五位一体总体布局', question: '新发展理念中，什么是内在要求？', options: ['创新','协调','绿色','共享'], answer: 1, explanation: '协调是持续健康发展的内在要求。' },
            { id: 'po_29', name: 'Day7', title: '五位一体总体布局', question: '新发展理念中，什么是必要条件？', options: ['创新','协调','绿色','开放'], answer: 2, explanation: '绿色是永续发展的必要条件。' },
            { id: 'po_30', name: 'Day7', title: '五位一体总体布局', question: '新发展理念中，什么是必由之路？', options: ['创新','协调','绿色','开放'], answer: 3, explanation: '开放是国家繁荣发展的必由之路。' }
        ]
    },
    {
        id: 'history',
        code: '15043',
        name: '近代史',
        icon: '📜',
        color: 'history',
        levels: [
            // Day 1-3: 鸦片战争到洋务运动
            { id: 'hi_1', name: 'Day1', title: '鸦片战争与南京条约', question: '鸦片战争爆发的时间是？', options: ['1839年','1840年','1842年','1856年'], answer: 1, explanation: '鸦片战争爆发于1840年6月。' },
            { id: 'hi_2', name: 'Day1', title: '鸦片战争与南京条约', question: '《南京条约》开放的通商口岸不包括？', options: ['广州','厦门','上海','天津'], answer: 3, explanation: '《南京条约》开放广州、厦门、福州、宁波、上海五口，不包括天津。' },
            { id: 'hi_3', name: 'Day1', title: '鸦片战争与南京条约', question: '鸦片战争后，中国开始沦为？', options: ['封建社会','半殖民地半封建社会','资本主义社会','新民主主义社会'], answer: 1, explanation: '鸦片战争后，中国开始沦为半殖民地半封建社会。' },
            { id: 'hi_4', name: 'Day1', title: '鸦片战争与南京条约', question: '《南京条约》是中国近代史上第几个不平等条约？', options: ['第一个','第二个','第三个','第四个'], answer: 0, explanation: '《南京条约》是中国近代史上第一个不平等条约。' },
            { id: 'hi_5', name: 'Day1', title: '鸦片战争与南京条约', question: '鸦片战争的直接原因是？', options: ['英国想打开中国市场','林则徐虎门销烟','清政府闭关锁国','英国工业革命完成'], answer: 1, explanation: '林则徐虎门销烟是鸦片战争的直接导火索。' },
            { id: 'hi_6', name: 'Day2', title: '鸦片战争与南京条约', question: '中国近代史的开端是？', options: ['鸦片战争','辛亥革命','五四运动','新中国成立'], answer: 0, explanation: '鸦片战争是中国近代史的开端。' },
            { id: 'hi_7', name: 'Day2', title: '鸦片战争与南京条约', question: '《南京条约》割让给英国的是？', options: ['香港岛','台湾岛','辽东半岛','澳门'], answer: 0, explanation: '《南京条约》割香港岛给英国。' },
            { id: 'hi_8', name: 'Day2', title: '第二次鸦片战争', question: '第二次鸦片战争的时间是？', options: ['1840-1842年','1856-1860年','1894-1895年','1900年'], answer: 1, explanation: '第二次鸦片战争发生于1856-1860年。' },
            { id: 'hi_9', name: 'Day2', title: '第二次鸦片战争', question: '第二次鸦片战争中，英法联军火烧了？', options: ['故宫','颐和园','圆明园','天坛'], answer: 2, explanation: '1860年英法联军火烧圆明园。' },
            { id: 'hi_10', name: 'Day2', title: '第二次鸦片战争', question: '第二次鸦片战争期间，哪个国家割占了中国领土最多？', options: ['英国','法国','俄国','美国'], answer: 2, explanation: '俄国在第二次鸦片战争期间割占中国北方大片领土。' },
            // Day 3-5: 洋务运动到戊戌变法
            { id: 'hi_11', name: 'Day3', title: '洋务运动与戊戌变法', question: '洋务运动的口号是？', options: ['民主、科学','自强、求富','变法、维新','共和、革命'], answer: 1, explanation: '洋务运动口号"自强""求富"。' },
            { id: 'hi_12', name: 'Day3', title: '洋务运动与戊戌变法', question: '洋务运动的根本目的是？', options: ['发展资本主义','挽救清政府的统治危机','推翻清朝统治','建立共和国'], answer: 1, explanation: '洋务运动的根本目的是挽救清政府的统治危机。' },
            { id: 'hi_13', name: 'Day3', title: '洋务运动与戊戌变法', question: '洋务运动的代表人物不包括？', options: ['曾国藩','李鸿章','左宗棠','康有为'], answer: 3, explanation: '康有为是维新派，不是洋务派。' },
            { id: 'hi_14', name: 'Day3', title: '洋务运动与戊戌变法', question: '洋务运动创办的近代军事工业有？', options: ['轮船招商局','江南制造总局','汉阳铁厂','湖北织布局'], answer: 1, explanation: '江南制造总局是洋务派创办的最大军事工业。' },
            { id: 'hi_15', name: 'Day3', title: '洋务运动与戊戌变法', question: '洋务运动创办的近代民用工业有？', options: ['安庆内军械所','福州船政局','轮船招商局','江南制造总局'], answer: 2, explanation: '轮船招商局是洋务派创办的民用工业。' },
            { id: 'hi_16', name: 'Day4', title: '洋务运动与戊戌变法', question: '洋务运动的指导思想是？', options: ['师夷长技以制夷','中学为体，西学为用','变法图强','三民主义'], answer: 1, explanation: '洋务运动的指导思想是"中学为体，西学为用"。' },
            { id: 'hi_17', name: 'Day4', title: '洋务运动与戊戌变法', question: '洋务运动失败的标志是？', options: ['鸦片战争失败','甲午战争失败','戊戌变法失败','八国联军侵华'], answer: 1, explanation: '甲午战争北洋水师全军覆没，标志洋务运动失败。' },
            { id: 'hi_18', name: 'Day4', title: '洋务运动与戊戌变法', question: '戊戌变法发生于哪一年？', options: ['1894年','1895年','1898年','1900年'], answer: 2, explanation: '戊戌变法(百日维新)发生于1898年。' },
            { id: 'hi_19', name: 'Day4', title: '洋务运动与戊戌变法', question: '戊戌变法的主要领导人是？', options: ['曾国藩、李鸿章','康有为、梁启超','孙中山、黄兴','袁世凯、张之洞'], answer: 1, explanation: '戊戌变法由康有为、梁启超等人领导。' },
            { id: 'hi_20', name: 'Day4', title: '洋务运动与戊戌变法', question: '戊戌变法持续了多少天？', options: ['10天','100天','103天','300天'], answer: 2, explanation: '戊戌变法从1898年6月到9月，历时103天，又称"百日维新"。' },
            // Day 5-7: 辛亥革命到新文化运动
            { id: 'hi_21', name: 'Day5', title: '辛亥革命', question: '辛亥革命爆发的时间是？', options: ['1910年10月10日','1911年10月10日','1912年1月1日','1919年5月4日'], answer: 1, explanation: '辛亥革命爆发于1911年10月10日(武昌起义)。' },
            { id: 'hi_22', name: 'Day5', title: '辛亥革命', question: '中华民国的首任临时大总统是？', options: ['袁世凯','孙中山','黎元洪','黄兴'], answer: 1, explanation: '1912年1月1日，孙中山就任中华民国临时大总统。' },
            { id: 'hi_23', name: 'Day5', title: '辛亥革命', question: '辛亥革命最大的历史功绩是？', options: ['结束了两千多年的封建帝制','建立了资产阶级共和国','使民主共和观念深入人心','为民族资本主义发展创造了条件'], answer: 0, explanation: '辛亥革命最大的历史功绩是结束了两千多年的封建帝制。' },
            { id: 'hi_24', name: 'Day5', title: '辛亥革命', question: '辛亥革命的性质是？', options: ['无产阶级革命','资产阶级民主革命','农民起义','地主阶级改革'], answer: 1, explanation: '辛亥革命是一场比较完全意义上的资产阶级民主革命。' },
            { id: 'hi_25', name: 'Day5', title: '辛亥革命', question: '辛亥革命的成果最终被谁窃取了？', options: ['袁世凯','段祺瑞','冯国璋','张作霖'], answer: 0, explanation: '辛亥革命的成果被袁世凯窃取。' },
            { id: 'hi_26', name: 'Day6', title: '五四运动与中共成立', question: '五四运动爆发的直接导火索是？', options: ['巴黎和会中国外交失败','辛亥革命失败','甲午战争战败','八国联军侵华'], answer: 0, explanation: '五四运动(1919年)导火索是巴黎和会中国外交失败。' },
            { id: 'hi_27', name: 'Day6', title: '五四运动与中共成立', question: '中国共产党成立的时间是？', options: ['1919年','1920年','1921年','1922年'], answer: 2, explanation: '中共一大1921年7月召开，标志中国共产党成立。' },
            { id: 'hi_28', name: 'Day6', title: '五四运动与中共成立', question: '五四运动的性质是？', options: ['旧民主主义革命','新民主主义革命的开端','社会主义革命','农民革命'], answer: 1, explanation: '五四运动是中国新民主主义革命的开端。' },
            { id: 'hi_29', name: 'Day6', title: '五四运动与中共成立', question: '中国共产党一大最后一天的会议在？', options: ['北京','上海','嘉兴南湖','广州'], answer: 2, explanation: '中共一大最后一天转移到浙江嘉兴南湖游船上举行。' },
            { id: 'hi_30', name: 'Day7', title: '新中国成立', question: '新中国成立的时间是？', options: ['1919年','1921年','1949年10月1日','1956年'], answer: 2, explanation: '1949年10月1日中华人民共和国成立。' }
        ]
    }
];

// ==================== 学习模式配置 ====================
// 取消通关机制 - 单次答对即通过
const PASS_THRESHOLD = 1; // 单次答对即通过

// ==================== 导出配置 ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SUBJECTS, PASS_THRESHOLD };
}
