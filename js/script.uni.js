// 设备检测函数
function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const platform = navigator.platform.toLowerCase();
    
    // 检测移动设备
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
    
    // 检测平板设备
    const isTablet = /ipad|android(?!.*mobile)/.test(userAgent) || 
                    (platform === 'macintel' && navigator.maxTouchPoints > 1);
    
    // 检测桌面设备
    const isDesktop = !isMobile && !isTablet;
    
    // 添加设备类到body
    document.body.className = '';
    if (isMobile) {
        document.body.classList.add('device-mobile');
    } else if (isTablet) {
        document.body.classList.add('device-tablet');
    } else {
        document.body.classList.add('device-desktop');
    }
}

// 页面加载时检测设备
detectDevice();

// 窗口大小改变时重新检测设备
window.addEventListener('resize', detectDevice);

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有需要操作的DOM元素
    const dropZone = document.getElementById('dropZone');           // 拖放区域
    const fileInput = document.getElementById('fileInput');         // 文件输入框
    const selectFilesBtn = document.getElementById('selectFilesBtn'); // 选择文件按钮
    const fileList = document.getElementById('fileList');           // 文件列表容器
    const processBtn = document.getElementById('processBtn');       // 处理按钮
    const downloadBtn = document.getElementById('downloadBtn');     // 下载按钮
    const downloadArea = document.getElementById('downloadArea');   // 下载区域
    const progressArea = document.getElementById('progressArea');   // 进度区域
    const progressFill = document.getElementById('progressFill');   // 进度条填充
    const progressText = document.getElementById('progressText');   // 进度文本
    const statusMessage = document.getElementById('statusMessage'); // 状态消息
    const configCard = document.querySelector('.config-card');      // 配置卡片
    
    // 初始化工具类
    const fileProcessor = new FileProcessor();
    const progressManager = new ProgressManager(progressFill, progressText, statusMessage);
    
    // 绑定事件监听器
    selectFilesBtn.addEventListener('click', () => fileInput.click()); // 点击按钮触发文件选择
    fileInput.addEventListener('change', handleFileSelect);            // 文件选择改变时处理
    
    // 为拖放区域绑定拖拽事件，阻止默认行为
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });
    
    // 添加拖拽视觉反馈事件
    dropZone.addEventListener('dragenter', () => {
        dropZone.classList.add('drag-over');
    });
    
    dropZone.addEventListener('dragover', () => {
        dropZone.classList.add('drag-over');
    });
    
    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });
    
    dropZone.addEventListener('drop', () => {
        dropZone.classList.remove('drag-over');
    });

    if (configCard) {
        setTimeout(() => configCard.classList.add('animated'), 700);
    }
    
    // 阻止拖拽事件的默认行为
    function preventDefaults(e) {
        e.preventDefault();   // 阻止默认的拖拽行为
        e.stopPropagation();  // 阻止事件冒泡
    }
    
    // 监听拖放事件
    dropZone.addEventListener('drop', handleDrop, false);
    
    // 处理拖放的文件
    function handleDrop(e) {
        const files = e.dataTransfer.files; // 获取拖放的文件列表

        handleFiles(files,this);                 // 调用文件处理函数

    }
    
    // 处理通过文件选择对话框选择的文件
    function handleFileSelect(e) {
        const files = e.target.files;  // 获取选择的文件列表
        handleFiles(files,this);            // 调用文件处理函数

    }

    // 格式化文件大小显示
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;                                    // 单位换算基数
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];        // 单位数组
        const i = Math.floor(Math.log(bytes) / Math.log(k)); // 计算单位级别
        // 返回格式化后的大小字符串
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // 统一处理文件（去重并显示）
    /**
     * @param {FileList} files
     * */
    async function handleFiles(files,inputer) {
        for (let i = 0; i < files.length; i++) {
            const file = files.item(i);

            try {
                const added = await fileProcessor.addFile(file);
                if (added) {
                    renderFileItem(file); // 渲染文件显示项
                    progressManager.showStatus(t('STATUS_FILE_ADDED', {name: file.name}), 'green');
                } else {
                    progressManager.showStatus(t('STATUS_FILE_EXISTS', {name: file.name}), 'orange');
                }
            } catch (error) {
                progressManager.showStatus(t('STATUS_FILE_ERROR', {name: file.name, error: error.message}), 'red');
            }
        }
        inputer.value=""
    }

    // 渲染单个文件项到列表中
    function renderFileItem(file) {
        // 计算文件哈希值用于删除操作
        computeFileHash(file).then(hash => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            
            // 检查文件类型并添加相应标识
            const fileName = file.name.toLowerCase();
            let fileTypeBadge = '';
            if (fileName.endsWith('.mcstructure')) {
                fileTypeBadge = '<span class="file-type-badge" style="background: #4caf50;">MCSTRUCTURE</span>';
            } else if (fileName.endsWith('.nbt')) {
                fileTypeBadge = '<span class="file-type-badge" style="background: #2196f3;">NBT→MCSTRUCTURE</span>';
            } else if (fileName.endsWith('.litematic')) {
                fileTypeBadge = '<span class="file-type-badge" style="background: #ff9800;">LITEMATIC→MCSTRUCTURE</span>';
            }
            
            fileItem.innerHTML = `
                <div class="file-info">
                    <span class="file-name">${file.name}</span>
                    ${fileTypeBadge}
                    <span class="file-size">${formatFileSize(file.size)}</span>
                </div>
                <button class="danger" onclick="removeFile('${hash}', this)">
                    ${t('BTN_DELETE')}
                </button>
            `;
            fileList.appendChild(fileItem);
        });
    }

    // 全局函数：删除指定文件（通过哈希值匹配）
    window.removeFile = function(fileHash, button) {
        // 从文件处理器中移除文件
        fileProcessor.uploadedFiles = fileProcessor.uploadedFiles.filter(f => f.hash !== fileHash);
        fileProcessor.fileHashes.delete(fileHash);

        const fileItem = button.closest('.file-item');
        if (fileItem) {
            fileItem.classList.add('removing');
            fileItem.addEventListener('animationend', function handler() {
                fileItem.removeEventListener('animationend', handler);
                fileItem.remove();
            });
        }

        progressManager.showStatus(t('STATUS_FILE_DELETED'), 'green');
    };

    function toggleSection(section, show) {
        if (!section) return;
        section.classList.remove('screen-enter', 'screen-exit');
        if (show) {
            section.style.display = 'block';
            requestAnimationFrame(() => section.classList.add('screen-enter'));
        } else {
            section.classList.add('screen-exit');
            section.addEventListener('animationend', function handler(event) {
                if (event.animationName !== 'screenExit') return;
                section.removeEventListener('animationend', handler);
                section.style.display = 'none';
            }, { once: true });
        }
    }

    // 绑定处理按钮点击事件
    processBtn.addEventListener('click', processFiles);
    
    // 主处理函数：开始文件处理流程
    async function processFiles() {
        // 检查是否有文件需要处理
        if (fileProcessor.getFileCount() === 0) {
            progressManager.showStatus(t('STATUS_NO_FILES'), 'red');
            return;
        }
        
        // 重置状态
        toggleSection(downloadArea, false);
        progressManager.reset();
        
        // 显示进度区域
        toggleSection(progressArea, true);
        
        try {
            await generateZipFile();
        } catch (error) {
            progressManager.showStatus(error.message, 'red');
        }
    }
    
    // 处理完成后的回调
    function completeProcessing() {
        toggleSection(progressArea, false);
        setTimeout(function() {toggleSection(downloadArea, true);},500)

        // 绑定下载按钮事件
        downloadBtn.onclick = function() {
            downloadZipFile();
        };
    }

    // 生成ZIP压缩文件
    async function generateZipFile() {
        progressManager.showStatus(t('STATUS_GENERATING_ZIP'), 'green');
        
        try {
            const projectName = document.getElementById('projectName').value || t('DEFAULT_PROJECT_NAME');
            
            // 使用ZipGenerator类生成ZIP文件
            const zipGenerator = new ZipGenerator(fileProcessor);
            const generatedZipBlob = await zipGenerator.generate(projectName);
            
            progressManager.update(100);
            progressManager.showStatus(t('STATUS_COMPLETE_DONE'), 'green');
            progressText.textContent = t('PROGRESS_COMPLETE');
            
            // 存储生成的ZIP文件
            fileProcessor.generatedZipBlob = generatedZipBlob;
            
            completeProcessing();
        } catch (error) {
            throw new Error(t('ERROR_ZIP_ERROR', {error: error.message}));
        }
    }
    
    // 下载ZIP文件
    function downloadZipFile() {
        // 检查是否有可下载的文件
        if (!fileProcessor.generatedZipBlob) {
            progressManager.showStatus(t('STATUS_NO_DOWNLOAD'), 'red');
            return;
        }
        
        try {
            // 创建带有正确MIME类型的Blob
            const projectName = document.getElementById('projectName').value || t('DEFAULT_PROJECT_NAME');
            const fileName = `${projectName}.mcpack`;
            
            // 使用 application/octet-stream 确保浏览器不会修改文件名
            const blob = new Blob([fileProcessor.generatedZipBlob], { 
                type: 'application/octet-stream' 
            });
            
            // 创建下载链接
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            a.style.display = 'none';
            document.body.appendChild(a);
            
            // 触发点击
            a.click();
            
            // 清理资源
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 100);
            
            progressManager.showStatus(t('STATUS_DOWNLOAD_STARTED'), 'green');
        } catch (error) {
            // 处理下载错误
            progressManager.showStatus(t('STATUS_DOWNLOAD_FAILED', {error: error.message}), 'red');
        }
    }
});