/**
 * 工具函数集合 - 文件压缩工具
 * @author wed15
 * @version 1.1.0
 */

// 国际化文本配置
const i18n = {
    zh: {
        // 页面标题
        PAGE_TITLE: '投影拓展包生成器--自动，本地',
        
        // 状态消息
        STATUS_READY: '准备就绪',
        STATUS_PROCESSING: '正在处理文件...',
        STATUS_GENERATING: '正在生成压缩包...',
        STATUS_COMPLETE: '压缩包已生成，可以下载了！',
        STATUS_DOWNLOAD_START: '下载已开始！',
        STATUS_FILE_ADDED: '文件 {name} 已添加！',
        STATUS_FILE_EXISTS: '文件 {name} 已存在！',
        STATUS_FILE_ERROR: '处理文件 {name} 时出错: {error}',
        STATUS_FILE_DELETED: '文件已删除',
        STATUS_NO_FILES: '请先添加文件！',
        STATUS_GENERATING_ZIP: '正在生成压缩包...',
        STATUS_COMPLETE_DONE: '处理完成！',
        STATUS_NO_DOWNLOAD: '没有可下载的文件',
        STATUS_DOWNLOAD_STARTED: '下载已开始',
        STATUS_DOWNLOAD_FAILED: '下载失败: {error}',
        STATUS_BROWSER_HINT: '建议在浏览器中打开该网站(右上角三个点哦!)',
        
        // 错误消息
        ERROR_NO_FILES: '没有上传任何文件',
        ERROR_FILE_READ: '读取文件时出错',
        ERROR_ZIP_GENERATE: '生成压缩包时出错',
        ERROR_DOWNLOAD_FAIL: '下载失败',
        ERROR_NO_DOWNLOAD_FILE: '没有可下载的文件，请先生成压缩包',
        ERROR_INVALID_FILE_TYPE: '只支持 .mcstructure、.nbt 和 .litematic 文件',
        ERROR_IMAGE_FETCH: '获取图像时出错',
        ERROR_ZIP_ERROR: '生成压缩包时出错: {error}',
        
        // UI文本
        PROGRESS_TEXT: '处理中...',
        PROGRESS_COMPLETE: '完成！',
        DROP_ZONE_TEXT: '拖放文件到此处，或点击',
        SELECT_FILES_BTN: '选择文件',
        DOWNLOAD_BTN: '下载压缩包',
        
        // 页面标题和副标题
        MAIN_TITLE: '投影包生成工具',
        SUB_TITLE: '无需上传 本地生成 大文件秒传 支持多文件',
        NAV_DOWNLOAD: '下载汉化投影主包',
        
        // 上传区域
        SECTION_UPLOAD: '上传文件',
        FORMAT_HINT: '支持格式：.mcstructure | .nbt | .litematic',
        
        // 配置区域
        SECTION_CONFIG: '配置选项',
        LABEL_PROJECT_NAME: '拓展包名称:',
        DEFAULT_PROJECT_NAME: '我的投影包',
        BTN_PROCESS: '处理并生成投影拓展包',
        
        // 进度区域
        SECTION_PROGRESS: '处理进度',
        
        // 下载区域
        SECTION_DOWNLOAD: '下载投影拓展包',
        DOWNLOAD_READY: '您的文件已准备就绪',
        
        // 删除按钮
        BTN_DELETE: '删除',
        
        // 底部
        FOOTER_SPONSOR: '赞助我们',
        FOOTER_ICP: '赣ICP备2026005549号-1',
        FOOTER_CDN: 'Esa分站',
        
        // 下载页面
        DL_PAGE_TITLE: '投影主包下载中心',
        DL_MAIN_TITLE: '汉化投影主包下载中心',
        DL_SUB_TITLE: '选择版本下载 持续更新中',
        DL_NAV_BACK: '返回投影包生成工具',
        DL_SECTION_AVAILABLE: '可用版本',
        DL_BTN_DOWNLOAD: '下载',
        DL_STATUS_START: '开始下载: {name}',
        DL_STATUS_FAILED: '下载失败: {error}',
        
        // 海外版专用
        OV_PAGE_TITLE: 'Construct Expansion Pack Generator',
        OV_MAIN_TITLE: 'Construct Pack Generator',
        OV_SUB_TITLE: '100% Offline · No Upload · Instant Convert',
        OV_FOOTER_POWERED: 'Powered by Sea-of-Stars-Studio',
        OV_STATUS_HINT: 'Open in browser for best experience'
    },
    en: {
        // Page title
        PAGE_TITLE: 'Construct Expansion Pack Generator - Offline & Local',
        
        // Status messages
        STATUS_READY: 'Ready',
        STATUS_PROCESSING: 'Processing files...',
        STATUS_GENERATING: 'Generating archive...',
        STATUS_COMPLETE: 'Archive generated, ready to download!',
        STATUS_DOWNLOAD_START: 'Download started!',
        STATUS_FILE_ADDED: 'File {name} added!',
        STATUS_FILE_EXISTS: 'File {name} already exists!',
        STATUS_FILE_ERROR: 'Error processing {name}: {error}',
        STATUS_FILE_DELETED: 'File deleted',
        STATUS_NO_FILES: 'Please add files first!',
        STATUS_GENERATING_ZIP: 'Generating archive...',
        STATUS_COMPLETE_DONE: 'Processing complete!',
        STATUS_NO_DOWNLOAD: 'No file to download',
        STATUS_DOWNLOAD_STARTED: 'Download started',
        STATUS_DOWNLOAD_FAILED: 'Download failed: {error}',
        STATUS_BROWSER_HINT: 'Please open this site in a browser (tap the 3 dots in the top right!)',
        
        // Error messages
        ERROR_NO_FILES: 'No files uploaded',
        ERROR_FILE_READ: 'Error reading file',
        ERROR_ZIP_GENERATE: 'Error generating archive',
        ERROR_DOWNLOAD_FAIL: 'Download failed',
        ERROR_NO_DOWNLOAD_FILE: 'No file to download, please generate archive first',
        ERROR_INVALID_FILE_TYPE: 'Only .mcstructure, .nbt and .litematic files are supported',
        ERROR_IMAGE_FETCH: 'Error fetching image',
        ERROR_ZIP_ERROR: 'Error generating archive: {error}',
        
        // UI text
        PROGRESS_TEXT: 'Processing...',
        PROGRESS_COMPLETE: 'Complete!',
        DROP_ZONE_TEXT: 'Drag files here or click to select',
        SELECT_FILES_BTN: 'Select Files',
        DOWNLOAD_BTN: 'Download Archive',
        
        // Page title and subtitle
        MAIN_TITLE: 'Construct Expansion Pack Generator',
        SUB_TITLE: 'Generate Construct Expansion Pack easily with different files',
        NAV_DOWNLOAD: 'Download Chinese Projection Pack',
        
        // Upload section
        SECTION_UPLOAD: 'Upload Files',
        FORMAT_HINT: 'Supported: .mcstructure | .nbt | .litematic',
        
        // Config section
        SECTION_CONFIG: 'Configuration',
        LABEL_PROJECT_NAME: 'Pack Name:',
        DEFAULT_PROJECT_NAME: 'My Construct Pack',
        BTN_PROCESS: 'Process & Generate Pack',
        
        // Progress section
        SECTION_PROGRESS: 'Processing Progress',
        
        // Download section
        SECTION_DOWNLOAD: 'Download Your Pack',
        DOWNLOAD_READY: 'Import Into MCBE & Load It In The World',
        
        // Delete button
        BTN_DELETE: 'Delete',
        
        // Footer
        FOOTER_SPONSOR: 'Sponsor Us',

        // Download page
        DL_PAGE_TITLE: 'Download Construct Addon',
        DL_MAIN_TITLE: 'Projection Pack Download Center',
        DL_SUB_TITLE: 'Select a version to download · Updated regularly',
        DL_NAV_BACK: 'Back to Pack Generator',
        DL_SECTION_AVAILABLE: 'Available Versions',
        DL_BTN_DOWNLOAD: 'Download',
        DL_STATUS_START: 'Downloading: {name}',
        DL_STATUS_FAILED: 'Download failed: {error}',
        
        // Overseas version
        OV_PAGE_TITLE: 'Construct Expansion Pack Generator',
        OV_MAIN_TITLE: 'Construct Pack Generator',
        OV_SUB_TITLE: 'Generate Construct Expansion Pack easily with different files',
        OV_FOOTER_POWERED: 'Powered by Sea-of-Stars-Studio',
        OV_STATUS_HINT: 'Open in browser for best experience'
    }
};

// 当前语言设置（可通过 switchLang 切换）
let currentLang = 'en';

/**
 * 带变量替换的翻译函数
 * @param {string} key - i18n 键名
 * @param {Object} vars - 替换变量，如 {name: 'test.txt'}
 * @returns {string} 翻译后的文本
 */
function t(key, vars) {
    let text = i18n[currentLang][key] || key;
    if (vars) {
        for (const [k, v] of Object.entries(vars)) {
            text = text.replace('{' + k + '}', v);
        }
    }
    return text;
}

/**
 * 切换语言并应用到页面
 * @param {string} lang - 目标语言 'zh' 或 'en'
 */
function switchLang(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    // 存储到 localStorage
    try { localStorage.setItem('lang', lang); } catch(e) {}
    applyI18n();
}

/**
 * 将 i18n 翻译应用到页面中所有带 data-i18n 属性的元素
 */
function applyI18n() {
    // 页面标题
    document.title = t('PAGE_TITLE');
    
    // 遍历所有带 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = i18n[currentLang][key];
        if (val !== undefined) {
            if (el.tagName === 'INPUT' && el.type !== 'button') {
                // input 元素：仅当当前值等于任一语言的默认值时才替换（避免覆盖用户输入）
                const attr = el.getAttribute('data-i18n-attr') || 'value';
                const currentVal = el[attr];
                const allDefaults = Object.values(i18n).map(lang => lang[key]);
                if (allDefaults.includes(currentVal) || currentVal === '') {
                    el[attr] = val;
                }
            } else {
                el.textContent = val;
            }
        }
    });
    
    // 处理 data-i18n-placeholder 属性
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const val = i18n[currentLang][key];
        if (val !== undefined) {
            el.placeholder = val;
        }
    });
    
    // 更新语言切换按钮文本
    const langBtn = document.getElementById('langSwitchBtn');
    if (langBtn) {
        langBtn.textContent = currentLang === 'zh' ? 'EN' : 'ZH';
    }
}

/**
 * 初始化语言：优先系统语言，若有手动切换记录则使用手动选择，默认 zh
 */
function initLang() {
    // 1. 先根据系统语言设置默认值
    try {
        const sysLang = (navigator.language || navigator.userLanguage || 'zh').toLowerCase();
        currentLang = sysLang.startsWith('zh') ? 'zh' : 'en';
    } catch(e) {}
    // 2. 若用户曾手动切换过语言，优先使用手动选择
    try {
        const saved = localStorage.getItem('lang');
        if (saved && i18n[saved]) {
            currentLang = saved;
        }
    } catch(e) {}
}

/**
 * UUID生成器 - 符合RFC4122标准
 * @returns {string} 生成的UUID字符串
 */
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * 计算文件MD5哈希值用于去重
 * @param {File} file - 要计算哈希的文件对象
 * @returns {Promise<string>} 文件的MD5哈希值
 */
function computeFileHash(file) {
    return new Promise((resolve, reject) => {
        const spark = new SparkMD5.ArrayBuffer();
        const reader = new FileReader();
        
        reader.onload = function(e) {
            spark.append(e.target.result);
            resolve(spark.end());
        };
        
        reader.onerror = function() {
            reject(new Error(i18n[currentLang].ERROR_FILE_READ));
        };
        
        reader.readAsArrayBuffer(file);
    });
}

/**
 * 验证文件类型是否为.mcstructure、.nbt 或.litematic
 * @param {File} file - 要验证的文件对象
 * @returns {boolean} 是否为有效文件类型
 */
function isValidFileType(file) {
    const fileName = file.name.toLowerCase();
    return fileName.endsWith('.mcstructure') || 
           fileName.endsWith('.nbt') || 
           fileName.endsWith('.litematic');
}

/**
 * 格式化文件大小显示
 * @param {number} bytes - 文件大小（字节）
 * @returns {string} 格式化后的文件大小字符串
 */
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;                                    // 单位换算基数
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];        // 单位数组
    const i = Math.floor(Math.log(bytes) / Math.log(k)); // 计算单位级别
    // 返回格式化后的大小字符串
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * 文件处理器类
 */
class FileProcessor {
    constructor() {
        this.uploadedFiles = [];
        this.fileHashes = new Set();
        this.generatedZipBlob = null;
        this.convertedFiles = new Map(); // 存储转换后的文件数据
    }
    
    /**
     * 添加文件到处理队列
     * @param {File} file - 要添加的文件
     * @returns {Promise<boolean>} 是否成功添加
     */
    async addFile(file) {
        // 验证文件类型
        if (!isValidFileType(file)) {
            throw new Error(i18n[currentLang].ERROR_INVALID_FILE_TYPE);
        }

        // 计算文件哈希值用于去重
        const hash = await computeFileHash(file);
        if (this.fileHashes.has(hash)) {
            return false; // 文件已存在，跳过
        }

        this.fileHashes.add(hash);
        this.uploadedFiles.push({
            file: file,
            name: file.name,
            size: file.size,
            hash: hash
        });

        // 延迟转换：在生成 ZIP 时再处理 nbt / litematic 文件，避免添加阶段阻塞
        return true;
    }
    
    /**
     * 转换 nbt 或 litematic 文件为 mcstructure
     * @param {File} file - 要转换的文件
     * @param {string} hash - 文件哈希值
     */
    async convertFile(file, hash) {
        try {
            const fileName = file.name.toLowerCase();
            let mcstructureData = null;
            let convertedFileName = '';
            
            if (fileName.endsWith('.litematic')) {
                // Litematic 先转 NBT，再转 Mcstructure（需要两步转换）
                if (typeof window.LitematicConverter === 'undefined') {
                    console.warn('LitematicConverter 未加载，跳过转换');
                    return;
                }

                const nbtResult = await window.LitematicConverter.convert(file);
                if (!nbtResult.success) {
                    console.error(`Litematic 转 NBT 失败：${nbtResult.error}`);
                    return;
                }
                
                if (typeof window.NBTToMcStructure === 'undefined') {
                    console.warn('NBTToMcStructure 未加载，跳过转换');
                    return;
                }
                
                await window.NBTToMcStructure.init('./data/');
                const buffer = nbtResult.data;
                const result = await window.NBTToMcStructure.convert(
                    buffer,
                    file.name.replace(/\.litematic$/i, '.nbt'),
                    { version: '1.21.0.03' }
                );
                
                if (result.success) {
                    mcstructureData = result.data;
                    convertedFileName = file.name.replace(/\.litematic$/i, '.mcstructure');
                } else {
                    console.error(`NBT 转 Mcstructure 失败：${result.error}`);
                    return;
                }
            } else if (fileName.endsWith('.nbt')) {
                // NBT 直接转 Mcstructure
                if (typeof window.NBTToMcStructure === 'undefined') {
                    console.warn('NBTToMcStructure 未加载，跳过转换');
                    return;
                }
                
                await window.NBTToMcStructure.init('./data/');
                const buffer = await file.arrayBuffer();
                const result = await window.NBTToMcStructure.convert(
                    buffer,
                    file.name,
                    { version: '1.21.0.03' }
                );
                
                if (result.success) {
                    mcstructureData = result.data;
                    convertedFileName = file.name.replace(/\.nbt$/i, '.mcstructure');
                } else {
                    console.error(`NBT 转 Mcstructure 失败：${result.error}`);
                    return;
                }
            }
            
            if (mcstructureData) {
                this.convertedFiles.set(hash, {
                    data: mcstructureData,
                    name: convertedFileName,
                    originalName: file.name
                });
                console.log(`文件转换成功：${file.name} → ${convertedFileName}`);
            }
        } catch (error) {
            console.error(`转换文件 ${file.name} 失败:`, error);
        }
    }
    
    /**
     * 清空所有文件
     */
    clearFiles() {
        this.uploadedFiles = [];
        this.fileHashes.clear();
        this.generatedZipBlob = null;
        this.convertedFiles.clear();
    }
    
    /**
     * 获取文件数量
     * @returns {number} 文件总数
     */
    getFileCount() {
        return this.uploadedFiles.length;
    }
    
    /**
     * 根据哈希值删除文件
     * @param {string} hash - 文件哈希值
     * @returns {boolean} 是否成功删除
     */
    removeFileByHash(hash) {
        const initialLength = this.uploadedFiles.length;
        this.uploadedFiles = this.uploadedFiles.filter(f => f.hash !== hash);
        this.fileHashes.delete(hash);
        this.convertedFiles.delete(hash); // 同时删除转换后的文件
        return this.uploadedFiles.length < initialLength;
    }
}

/**
 * ZIP生成器类
 */
class ZipGenerator {
    constructor(fileProcessor, progressManager = null) {
        this.fileProcessor = fileProcessor;
        this.progressManager = progressManager;
        this.zip = new JSZip();
    }
    
    /**
     * 生成完整的ZIP包
     * @param {string} projectName - 项目名称
     * @returns {Promise<Blob>} 生成的ZIP文件Blob
     */
    async generate(projectName) {
        try {
            // 更新进度：开始生成
            this.updateProgress(10);
            
            // 生成manifest.json配置文件
            this.generateManifest(projectName);
            this.updateProgress(30);
            
            // 生成脚本文件
            await this.generateScripts();
            this.updateProgress(50);
            
            // 添加图标文件
            await this.addIcon();
            this.updateProgress(70);

            // 添加用户上传的结构文件
            await this.addStructureFiles();
            this.updateProgress(90);
            
            // 生成最终的ZIP文件
            const blob = await this.createZipBlob();
            this.updateProgress(100);
            
            return blob;
        } catch (error) {
            console.error('生成ZIP文件失败:', error);
            throw error;
        }
    }
    
    /**
     * 更新进度
     * @param {number} percentage - 进度百分比
     */
    updateProgress(percentage) {
        if (this.progressManager) {
            this.progressManager.update(percentage);
        }
    }
    
    /**
     * 生成manifest.json配置文件
     * @param {string} projectName - 项目名称
     */
    generateManifest(projectName) {
        const manifest = {
            format_version: 2,
            header: {
                name: `Construct-Expansion-${projectName}`,
                description: `ID：${generateUUID()} Made by Construct Pack Generator`,
                uuid: generateUUID(),
                version: [1, 0, 0],
                min_engine_version: [1, 21, 90]
            },
            modules: [
                {
                    type: "data",
                    uuid: generateUUID(),
                    version: [1, 0, 0]
                },
                {
                    type: "script",
                    language: "javascript",
                    uuid: generateUUID(),
                    entry: "scripts/main.js",
                    version: [1, 0, 0]
                }
            ],
            dependencies: [
                {
                    module_name: "@minecraft/server",
                    version: "2.1.0"
                }
            ]
        };
        
        this.zip.file("manifest.json", JSON.stringify(manifest, null, 2));
    }
    
    /**
     * 生成脚本文件
     */
    async generateScripts() {
        const scriptsFolder = this.zip.folder("scripts");
        let fileNames = this.fileProcessor.uploadedFiles

            .map(file => file.name.replace(/\.mcstructure$/i, ''))
            .map(file => JSON.stringify(file))

            .join("或\n");


        
            
        const mainJsContent = `//@ts-ignore
import { world, system, EasingType } from "@minecraft/server";

const HELP_MESSAGE = \`Open the Construct menu,enter:\\n${fileNames}\\n as the Structure ID\`;
world.afterEvents.playerSpawn.subscribe((event) => {
    if (event.initialSpawn) {
        system.runTimeout(() => {
            event.player.sendMessage(HELP_MESSAGE);
        }, 20);
    }
});
//@ts-ignore
world.beforeEvents.chatSend.subscribe((event) => {
    var freeCameraRunId = Number(event.sender.getDynamicProperty("help")) || 0;
    if (event.message === "提示") {
        event.cancel = true;
        event.sender.sendMessage(HELP_MESSAGE);
        return;
    }
});`;
        
        scriptsFolder.file("main.js", mainJsContent);
    }
    
    /**
     * 添加图标文件
     * @returns {Promise<void>}
     */
    async addIcon() {
        try {
            const imageUrl = `./pack_icon.png`;
            const response = await fetch(imageUrl);
            if (response.ok) {
                const blob = await response.blob();
                this.zip.file("pack_icon.png", blob);
            }
        } catch (error) {
            console.warn(i18n[currentLang].ERROR_IMAGE_FETCH, error);
        }
    }
    
    /**
     * 添加结构文件到 ZIP（包括转换后的文件）
     * @returns {Promise<void>}
     */
    async addStructureFiles() {
        const structuresFolder = this.zip.folder("structures");
        const files = this.fileProcessor.uploadedFiles;
            
        for (const item of files) {
            let arrayBuffer;
            let fileName = item.name;
            const fileNameLower = item.name.toLowerCase();
            const converted = this.fileProcessor.convertedFiles.get(item.hash);

            if (converted) {
                // 使用已转换的 mcstructure 文件
                arrayBuffer = converted.data;
                fileName = converted.name;
            } else if (fileNameLower.endsWith('.nbt') || fileNameLower.endsWith('.litematic')) {
                // 延迟转换
                await this.fileProcessor.convertFile(item.file, item.hash);
                const convertedAfter = this.fileProcessor.convertedFiles.get(item.hash);
                if (convertedAfter) {
                    arrayBuffer = convertedAfter.data;
                    fileName = convertedAfter.name;
                } else {
                    // 转换失败，回退为原始文件
                    arrayBuffer = await item.file.arrayBuffer();
                }
            } else {
                arrayBuffer = await item.file.arrayBuffer();
            }
                
            structuresFolder.file(fileName, arrayBuffer);
        }
    }
    
    /**
     * 创建ZIP文件Blob
     * @returns {Promise<Blob>} ZIP文件Blob
     */
    async createZipBlob() {
        return await this.zip.generateAsync({
            type: "blob",
            compression: "DEFLATE",
            compressionOptions: {
                level: 6
            }
        });
    }
}

/**
 * 进度管理器
 */
class ProgressManager {
    constructor(progressBar, progressText, statusMessage) {
        this.progressBar = progressBar;
        this.progressText = progressText;
        this.statusMessage = statusMessage;
    }
    
    /**
     * 更新进度显示
     * @param {number} percentage - 进度百分比 (0-100)
     */
    update(percentage) {
        this.progressBar.style.width = percentage + '%';
        this.progressText.textContent = Math.round(percentage) + '%';
    }
    
    /**
     * 显示状态消息
     * @param {string} message - 消息内容
     * @param {string} color - 文字颜色
     */
    showStatus(message, color = 'black') {
        this.statusMessage.textContent = message;
        this.statusMessage.style.color = color;
        console.log(message)
    }
    
    /**
     * 重置进度
     */
    reset() {
        this.update(0);
        this.progressText.textContent = i18n[currentLang].PROGRESS_TEXT;
        this.showStatus('');
    }
}
