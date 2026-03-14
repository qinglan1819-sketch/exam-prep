// ==================== 27天自考闯关题库配置 ====================
// 4科：英语写作(13162)、英汉互译(13129)、新思想(15040)、近代史(15043)
// 每科7个关卡，共28个关卡，按27天分配（前27天每天学1-2个新考点+复习）

const SUBJECTS = [
    {
        id: 'english_writing',
        code: '13162',
        name: '英语写作',
        icon: '✍️',
        color: 'english-writing',
        levels: [
            {
                id: 'ew_1',
                name: 'Day 1',
                title: '段落结构与主题句',
                type: 'choice',
                question: '英语段落的基本结构是什么？主题句(topic sentence)通常位于什么位置？',
                options: ['总分总结构，主题句在段首', '分总分结构，主题句在段尾', '总分结构，主题句在段首或段尾', '平行结构，无固定主题句'],
                answer: 2,
                explanation: '英语段落通常采用"总-分-总"或"总-分"结构，主题句可在段首或段尾，段首更常见。'
            },
            {
                id: 'ew_2',
                name: 'Day 5',
                title: '论证方法与过渡词',
                type: 'choice',
                question: '以下哪种不是常见的论证方法？"Furthermore" 是什么类型的过渡词？',
                options: ['举例论证，递进', '对比论证，转折', '抒情论证，递进', '因果论证，因果'],
                answer: 2,
                explanation: '常见论证方法包括举例、对比、因果、定义、分类等，不包括"抒情论证"。Furthermore表示递进。'
            },
            {
                id: 'ew_3',
                name: 'Day 9',
                title: '文章结构与五段式',
                type: 'choice',
                question: '典型的五段式文章结构包含？',
                options: ['引言+2段正文+结论', '引言+3段正文+结论', '引言+4段正文+结论', '5段正文无引言'],
                answer: 1,
                explanation: '五段式文章=引言段+3个主体段+结论段，是英语写作的经典结构。'
            },
            {
                id: 'ew_4',
                name: 'Day 13',
                title: '议论文写作',
                type: 'choice',
                question: '议论文(argumentative essay)的核心是什么？',
                options: ['描述场景', '讲述故事', '论证观点', '抒发情感'],
                answer: 2,
                explanation: '议论文的核心是通过逻辑论证来支持某个观点或立场。'
            },
            {
                id: 'ew_5',
                name: 'Day 17',
                title: '说明文与应用文',
                type: 'choice',
                question: '说明文(expository essay)的主要目的是？',
                options: ['娱乐读者', '解释说明', '说服读者', '表达情感'],
                answer: 1,
                explanation: '说明文旨在解释、说明某个概念、过程或现象，强调客观性和清晰度。'
            },
            {
                id: 'ew_6',
                name: 'Day 21',
                title: '句子多样性与衔接',
                type: 'choice',
                question: '以下哪种方法不能增加句子多样性？',
                options: ['长短句结合', '使用不同句型', '全部使用简单句', '适当使用从句'],
                answer: 2,
                explanation: '句子多样性需要通过长短句结合、不同句型、从句等方式实现，全部使用简单句会导致单调。'
            },
            {
                id: 'ew_7',
                name: 'Day 25',
                title: '写作综合技巧',
                type: 'shortanswer',
                question: '请简述英语写作中如何确保段落连贯性(coherence)的3个方法。',
                answer: ['使用过渡词和过渡句', '保持一致的代词指称', '按逻辑顺序组织内容'],
                explanation: '段落连贯性通过过渡词、代词指称、逻辑顺序、关键词重复等方式实现。'
            }
        ]
    },
    {
        id: 'translation',
        code: '13129',
        name: '英汉互译',
        icon: '🔄',
        color: 'translation',
        levels: [
            {
                id: 'tr_1',
                name: 'Day 2',
                title: '直译与意译',
                type: 'choice',
                question: '"It\'s raining cats and dogs" 应如何翻译？',
                options: ['下着猫和狗', '倾盆大雨', '动物在下雨', '猫狗大战'],
                answer: 1,
                explanation: '这是英语习语，需要意译为"倾盆大雨"，不能直译。'
            },
            {
                id: 'tr_2',
                name: 'Day 6',
                title: '词性转换',
                type: 'choice',
                question: '英译汉时，形容词常可转换为？',
                options: ['只能作形容词', '名词或动词', '只能作副词', '只能作介词'],
                answer: 1,
                explanation: '英译汉时词性常需转换，形容词可转为名词或动词，如"careful"→"小心地(做)"或"谨慎"。'
            },
            {
                id: 'tr_3',
                name: 'Day 10',
                title: '增译与减译',
                type: 'choice',
                question: '什么是增译法？汉译英时哪些词常可省略？',
                options: ['增加原文没有的词，重复或冗余的词', '删减原文的词，主语', '完全照字面翻译，动词', '改变原文意思，所有虚词'],
                answer: 0,
                explanation: '增译是增加原文隐含但未明说的词；减译是省略汉语中重复或冗余的词。'
            },
            {
                id: 'tr_4',
                name: 'Day 14',
                title: '被动语态处理',
                type: 'choice',
                question: '英语被动语态在汉语中常如何处理？',
                options: ['必须用"被"字', '转为主动或省略', '保持被动', '不能翻译'],
                answer: 1,
                explanation: '英语被动语态在汉语中常转为主动句，或用"由...""受..."等表达，不局限于"被"。'
            },
            {
                id: 'tr_5',
                name: 'Day 18',
                title: '长句拆分与重组',
                type: 'choice',
                question: '处理长句的最佳策略是？',
                options: ['一字一句翻译', '拆分重组', '全部省略', '保持原句结构'],
                answer: 1,
                explanation: '长句翻译需要分析句子结构，拆分成短句，按汉语习惯重新组织。'
            },
            {
                id: 'tr_6',
                name: 'Day 22',
                title: '文化负载词翻译',
                type: 'choice',
                question: '"春节"属于什么类型的词汇？应如何翻译？',
                options: ['普通名词，直接译', '文化负载词，Spring Festival/Chinese New Year', '专有名词，音译', '外来词，保留原样'],
                answer: 1,
                explanation: '文化负载词承载特定文化内涵，翻译时需考虑文化差异和目标读者。'
            },
            {
                id: 'tr_7',
                name: 'Day 26',
                title: '翻译综合技巧',
                type: 'shortanswer',
                question: '请简述汉译英时处理流水句的3种方法。',
                answer: ['找出主干，确定主谓', '添加连接词，明确逻辑', '拆分短句，独立成句'],
                explanation: '汉语流水句短句多、连接词少，英译时需要找出逻辑关系，添加连接词或拆分成独立句子。'
            }
        ]
    },
    {
        id: 'politics',
        code: '15040',
        name: '新思想',
        icon: '💡',
        color: 'politics',
        levels: [
            {
                id: 'po_1',
                name: 'Day 3',
                title: '新时代与主要矛盾',
                type: 'choice',
                question: '中国特色社会主义进入新时代的标志是？新时代我国社会主要矛盾是？',
                options: ['改革开放，物质文化需要', '党的十八大，美好生活需要 vs 不平衡不充分发展', '党的十九大，阶级矛盾', '新中国成立，经济发展矛盾'],
                answer: 1,
                explanation: '党的十八大标志进入新时代；主要矛盾转化为人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。'
            },
            {
                id: 'po_2',
                name: 'Day 7',
                title: '中国梦与两个百年',
                type: 'choice',
                question: '中国梦的核心内涵是？第二个百年奋斗目标是？',
                options: ['个人富裕，建党100年', '中华民族伟大复兴，建国100年全面建成社会主义现代化强国', 'GDP世界第一，建军100年', '科技领先，改革开放100年'],
                answer: 1,
                explanation: '中国梦=中华民族伟大复兴；两个百年目标分别是建党100年全面建成小康社会，建国100年全面建成社会主义现代化强国。'
            },
            {
                id: 'po_3',
                name: 'Day 11',
                title: '五位一体总体布局',
                type: 'choice',
                question: '"五位一体"总体布局包括？不包括？',
                options: ['经济、政治、文化、社会、生态文明建设', '经济、政治、军事、文化、社会建设', '经济、政治、文化、社会、党的建设', '改革、发展、稳定、安全、生态建设'],
                answer: 0,
                explanation: '五位一体=经济建设+政治建设+文化建设+社会建设+生态文明建设。'
            },
            {
                id: 'po_4',
                name: 'Day 15',
                title: '四个全面战略布局',
                type: 'choice',
                question: '"四个全面"战略布局中，居于引领地位的是？',
                options: ['全面建设社会主义现代化国家', '全面深化改革', '全面依法治国', '全面从严治党'],
                answer: 0,
                explanation: '四个全面中，全面建设社会主义现代化国家是战略目标，居于引领地位；其他三个是战略举措。'
            },
            {
                id: 'po_5',
                name: 'Day 19',
                title: '新发展理念',
                type: 'choice',
                question: '新发展理念的内容是？',
                options: ['改革、开放、创新、协调、绿色', '创新、协调、绿色、开放、共享', '民主、法治、公平、正义、安全', '富强、民主、文明、和谐、美丽'],
                answer: 1,
                explanation: '新发展理念=创新(第一动力)+协调(内在要求)+绿色(必要条件)+开放(必由之路)+共享(本质要求)。'
            },
            {
                id: 'po_6',
                name: 'Day 23',
                title: '全面深化改革与依法治国',
                type: 'choice',
                question: '全面深化改革的总目标是？',
                options: ['完善和发展中国特色社会主义制度，推进国家治理体系和治理能力现代化', '实现GDP翻番', '建成小康社会', '实现共同富裕'],
                answer: 0,
                explanation: '全面深化改革总目标是完善和发展中国特色社会主义制度、推进国家治理体系和治理能力现代化。'
            },
            {
                id: 'po_7',
                name: 'Day 27',
                title: '新思想核心要点',
                type: 'shortanswer',
                question: '请简述"十四个坚持"中的前5个坚持。',
                answer: ['坚持党对一切工作的领导', '坚持以人民为中心', '坚持全面深化改革', '坚持新发展理念', '坚持人民当家作主'],
                explanation: '十四个坚持是新时代坚持和发展中国特色社会主义的基本方略，包括：坚持党对一切工作的领导、坚持以人民为中心、坚持全面深化改革、坚持新发展理念、坚持人民当家作主、坚持全面依法治国、坚持社会主义核心价值体系、坚持在发展中保障和改善民生、坚持人与自然和谐共生、坚持总体国家安全观、坚持党对人民军队的绝对领导、坚持"一国两制"和推进祖国统一、坚持推动构建人类命运共同体、坚持全面从严治党。'
            }
        ]
    },
    {
        id: 'history',
        code: '15043',
        name: '近代史',
        icon: '📜',
        color: 'history',
        levels: [
            {
                id: 'hi_1',
                name: 'Day 4',
                title: '鸦片战争与南京条约',
                type: 'choice',
                question: '鸦片战争爆发的时间是？《南京条约》开放的通商口岸不包括？',
                options: ['1839年，广州', '1840年，天津', '1842年，上海', '1856年，厦门'],
                answer: 1,
                explanation: '鸦片战争爆发于1840年；《南京条约》开放广州、厦门、福州、宁波、上海五口，不包括天津。'
            },
            {
                id: 'hi_2',
                name: 'Day 8',
                title: '洋务运动与戊戌变法',
                type: 'choice',
                question: '洋务运动的口号是？戊戌变法发生于哪一年？',
                options: ['民主、科学，1894年', '自强、求富，1898年', '变法、维新，1895年', '共和、革命，1900年'],
                answer: 1,
                explanation: '洋务运动口号"自强""求富"；戊戌变法(百日维新)发生于1898年。'
            },
            {
                id: 'hi_3',
                name: 'Day 12',
                title: '辛亥革命',
                type: 'choice',
                question: '辛亥革命爆发的时间是？其历史意义是？',
                options: ['1910年10月10日，结束封建统治', '1911年10月10日，推翻清朝，建立共和', '1912年1月1日，统一中国', '1919年5月4日，开启新民主主义革命'],
                answer: 1,
                explanation: '辛亥革命爆发于1911年10月10日(武昌起义)，推翻了清朝统治，结束了两千多年封建帝制，建立了中华民国。'
            },
            {
                id: 'hi_4',
                name: 'Day 16',
                title: '五四运动与中国共产党成立',
                type: 'choice',
                question: '五四运动爆发的直接导火索是？中国共产党成立的时间是？',
                options: ['巴黎和会中国外交失败，1921年', '辛亥革命失败，1919年', '甲午战争战败，1920年', '八国联军侵华，1922年'],
                answer: 0,
                explanation: '五四运动(1919年)导火索是巴黎和会中国外交失败；中共一大1921年7月召开，标志中国共产党成立。'
            },
            {
                id: 'hi_5',
                name: 'Day 20',
                title: '抗日战争',
                type: 'choice',
                question: '中国人民抗日战争胜利纪念日是？抗战持续了多少年？',
                options: ['8月15日，8年', '9月2日，14年', '9月3日，14年', '10月1日，8年'],
                answer: 2,
                explanation: '抗战胜利纪念日是9月3日；从1931年九一八事变到1945年日本投降，共14年(从1937年全面抗战算是8年)。'
            },
            {
                id: 'hi_6',
                name: 'Day 24',
                title: '解放战争与新中国成立',
                type: 'choice',
                question: '新中国成立的时间是？其历史意义是？',
                options: ['1919年，新民主主义革命开端', '1921年，中国共产党成立', '1949年10月1日，中国人民站起来', '1956年，社会主义制度确立'],
                answer: 2,
                explanation: '1949年10月1日中华人民共和国成立，标志着中国人民从此站起来了，开辟了中国历史新纪元。'
            },
            {
                id: 'hi_7',
                name: 'Day 28',
                title: '近代史综合',
                type: 'shortanswer',
                question: '请简述中国近代史(1840-1949)的两大历史任务。',
                answer: ['求得民族独立和人民解放', '实现国家富强和人民富裕'],
                explanation: '中国近代史两大历史任务：一是求得民族独立和人民解放(反帝反封建)，二是实现国家富强和人民富裕(现代化)。前者为后者创造前提条件。'
            }
        ]
    }
];

// ==================== 27天学习计划表 ====================
// Day 1-27 每天学习任务分配
const STUDY_PLAN = [
    { day: 1,  newStudy: ['ew_1'],      review: [] },
    { day: 2,  newStudy: ['tr_1'],      review: ['ew_1'] },
    { day: 3,  newStudy: ['po_1'],      review: ['tr_1'] },
    { day: 4,  newStudy: ['hi_1'],      review: ['po_1', 'ew_1'] },
    { day: 5,  newStudy: ['ew_2'],      review: ['hi_1', 'tr_1'] },
    { day: 6,  newStudy: ['tr_2'],      review: ['ew_2', 'po_1'] },
    { day: 7,  newStudy: ['po_2'],      review: ['tr_2', 'hi_1', 'ew_1'] },
    { day: 8,  newStudy: ['hi_2'],      review: ['po_2', 'ew_2'] },
    { day: 9,  newStudy: ['ew_3'],      review: ['hi_2', 'tr_2'] },
    { day: 10, newStudy: ['tr_3'],      review: ['ew_3', 'po_2', 'ew_1'] },
    { day: 11, newStudy: ['po_3'],      review: ['tr_3', 'hi_2'] },
    { day: 12, newStudy: ['hi_3'],      review: ['po_3', 'ew_3', 'tr_1'] },
    { day: 13, newStudy: ['ew_4'],      review: ['hi_3', 'tr_3'] },
    { day: 14, newStudy: ['tr_4'],      review: ['ew_4', 'po_3', 'ew_2'] },
    { day: 15, newStudy: ['po_4'],      review: ['tr_4', 'hi_3', 'po_1'] },
    { day: 16, newStudy: ['hi_4'],      review: ['po_4', 'ew_4', 'tr_2'] },
    { day: 17, newStudy: ['ew_5'],      review: ['hi_4', 'tr_4'] },
    { day: 18, newStudy: ['tr_5'],      review: ['ew_5', 'po_4', 'ew_3'] },
    { day: 19, newStudy: ['po_5'],      review: ['tr_5', 'hi_4', 'po_2'] },
    { day: 20, newStudy: ['hi_5'],      review: ['po_5', 'ew_5', 'tr_3'] },
    { day: 21, newStudy: ['ew_6'],      review: ['hi_5', 'tr_5'] },
    { day: 22, newStudy: ['tr_6'],      review: ['ew_6', 'po_5', 'ew_4'] },
    { day: 23, newStudy: ['po_6'],      review: ['tr_6', 'hi_5', 'po_3'] },
    { day: 24, newStudy: ['hi_6'],      review: ['po_6', 'ew_6', 'tr_4'] },
    { day: 25, newStudy: ['ew_7'],      review: ['hi_6', 'tr_6'] },
    { day: 26, newStudy: ['tr_7'],      review: ['ew_7', 'po_6', 'ew_5'] },
    { day: 27, newStudy: ['po_7', 'hi_7'], review: ['tr_7', 'hi_6', 'po_4', 'ew_1'] } // 最后两天合并
];

// ==================== 使用说明 ====================
/*
1. 此题库包含4科，每科7个关卡，共28个关卡
2. 按27天分配学习：前26天每天学1个新考点，第27天学2个
3. 每关需要连续答对3次才能"通关"
4. 通关后按艾宾浩斯遗忘曲线安排复习：第1、2、4、7、15天
5. 题型包括单选题(choice)和简答题(shortanswer)
6. 简答题需要用户手动输入关键词匹配

TODO: 需要将题目内容替换为你的PDF真题中的实际题目
*/

// 导出配置（如果在Node环境使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SUBJECTS, STUDY_PLAN };
}
