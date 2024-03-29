// Arabic translation by Shaggy#0951

const Name = 'العربية';

function GetString(str, tokens) {
    switch (str) {
        // connectionManager
        case 'connectionmanager/error-ETIMEDOUT-1': return `[connection] :الأسباب الشائعة لهذا هى ${tokens.address}:${tokens.port} (timeout)! خطأ: غير قادر على الإتصال بخادم اللعبة على`;
        case 'connectionmanager/error-ETIMEDOUT-2': return '[connection] - IP شبكة إنترنت غير مستقرة أو حظر جغرافي';
        case 'connectionmanager/error-ETIMEDOUT-3': return '[connection] - جارى صيانة خادم اللعبة';
        case 'connectionmanager/error-ECONNRESET-EPIPE-1': return `[connection] :تم إغلاق الإتصال بخادم اللعبة بشكل غير متوقع. الأسباب الشائعة لهذا هي - ${tokens.code} :خطأ`;
        case 'connectionmanager/error-ECONNRESET-EPIPE-2': return '[connection] - انقطاع الاتصال ناتج عن شبكة إنترنت غير مستقرة';
        case 'connectionmanager/error-ECONNRESET-EPIPE-3': return '[connection] - استغلال ثغرة أو غش أو تطبيق معطل تسبب فى طردك';
        case 'connectionmanager/connected': return `[connection] ${tokens.remoteAddress}:${tokens.remotePort} إلى ${tokens.remote} توجيه`;
        case 'connectionmanager/disconnected': return `[connection] ${tokens.remote} انقطع الاتصال ب`;

        // loader-cli
        case 'loader-cli/error-node-too-old-1': return 'TERA Toolbox! قديم جدًا لتشغيل Node.JS خطأ: إصدارك المثبت من';
        case 'loader-cli/error-node-too-old-2': return 'https://nodejs.org/ar/download/current/ من Node.JS وإعادة تثبيته، أو تثبيت أحدث إصدار من TERA Toolbox خطأ: يرجى إعادة تحميل';
        case 'loader-cli/error-runtime-incompatible-default': return `${tokens.message} :خطأ`;
        case 'loader-cli/error-config-corrupt-1': return 'config.json! خطأ: عفوًا ، يبدو أنك عبثت في ملف';
        case 'loader-cli/error-config-corrupt-2': return `${tokens.supportUrl} :خطأ: حاول إصلاحة بنفسك أو إسأل هنا`;
        case 'loader-cli/error-migration-failed-1': return 'TERA Toolbox! خطأ: غير قادر على ترحيل الملفات من إصدار قديم من';
        case 'loader-cli/error-migration-failed-2': return 'خطأ: يرجى إعادة تثبيت نسخة نظيفة باستخدام أحدث مثبت';
        case 'loader-cli/error-migration-failed-3': return `${tokens.supportUrl} خطأ: أو أطلب المساعدة هنا:`;
        case 'loader-cli/error-cannot-start-proxy': return '[toolbox] ...غير قادر على بدء تشغيل بروكسى الشبكة، إنهاء';
        case 'loader-cli/terminating': return '...إنهاء';
        case 'loader-cli/warning-noupdate-1': return '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';
        case 'loader-cli/warning-noupdate-2': return '        لقد قُمت بتعطيل التحديثات التلقائية على الصعيد الكلى';
        case 'loader-cli/warning-noupdate-3': return '        لن يكون هناك دعم لأى نوع من المشاكل التى قد';
        case 'loader-cli/warning-noupdate-4': return '                تواجهها كنتيجة لقيامك بذلك';
        case 'loader-cli/warning-noupdate-5': return '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';
        case 'loader-cli/warning-update-mod-not-supported': return `[update] !لا يدعم التحديث التلقائي - ${tokens.name} - تحذير: هذا التطبيق`;
        case 'loader-cli/error-update-mod-failed': return `[update] !و قد يكون معطلاً - ${tokens.name} - خطأ: تعذر تحديث هذا التطبيق`;
        case 'loader-cli/error-update-tera-data-failed-1': return '[update] Opcode maps و packet definitions خطأ: حدثت أخطاء فى تحديث';
        case 'loader-cli/error-update-tera-data-failed-2': return '[update] !خطأ: هذا قد يؤدي إلى مزيد من الأخطاء';
        case 'loader-cli/error-update-failed': return ':خطأ: غير قادر على التحديث التلقائي! رسالة الخطأ الكاملة هي';

        // loader-gui
        case 'loader-gui/tray/quit': return 'خروج';
        case 'loader-gui/error-config-file-corrupt/title': return '!ملف الإعدادات غير صالح';
        case 'loader-gui/error-config-file-corrupt/message': return `. ${tokens.supportUrl} :غير صالح. حاول إصلاحة بنفسك أو قم بحذفه لإنشاء ملف جديد أو أطلب المساعدة هنا TERA Toolbox فى مجلد config.json ملف \n\n .سيتم الآن إنهاء البرنامج`;
        case 'loader-gui/error-migration-failed/title': return '!خطأ فى ترحيل الملفات';
        case 'loader-gui/error-migration-failed/message': return `.TERA Toolbox يتعذر ترحيل الملفات من الإصدارقديم من \ n . ${tokens.supportUrl} الرجاء إعادة تثبيت نسخة نظيفة باستخدام أحدث مثبت أو اطلب المساعدة هنا \ n \ n .سيتم الآن إنهاء البرنامج`;
        case 'loader-gui/error-cannot-start-proxy': return '[toolbox] !غير قادر على بدء تشغيل بروكسى الشبكة';
        case 'loader-gui/terminating': return '...إنهاء';
        case 'loader-gui/warning-noselfupdate-1': return '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';
        case 'loader-gui/warning-noselfupdate-2': return '        لقد قُمت بتعطيل التحديثات التلقائية الذاتية';
        case 'loader-gui/warning-noselfupdate-3': return '        لن يكون هناك دعم لأى نوع من المشاكل التى قد';
        case 'loader-gui/warning-noselfupdate-4': return '                تواجهها كنتيجة لقيامك بذلك';
        case 'loader-gui/warning-noselfupdate-5': return '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';
        case 'loader-gui/warning-noupdate-1': return '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';
        case 'loader-gui/warning-noupdate-2': return '        لقد قمت بتعطيل التحديثات التلقائية على الصعيد الكلى';
        case 'loader-gui/warning-noupdate-3': return '        لن يكون هناك دعم لأى نوع من المشاكل التى قد';
        case 'loader-gui/warning-noupdate-4': return '                تواجهها كنتيجة لقيامك بذلك';
        case 'loader-gui/warning-noupdate-5': return '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';
        case 'loader-gui/warning-update-mod-not-supported': return `[update] !لا يدعم التحديث التلقائي - ${tokens.name} - تحذير: هذا التطبيق`;
        case 'loader-gui/error-update-mod-failed': return `[update] !و قد يكون معطلاً - ${tokens.name} - خطأ: تعذر تحديث هذا التطبيق`;
        case 'loader-gui/error-update-tera-data-failed-1': return '[update] Opcode maps و packet definitions خطأ: حدثت أخطاء فى تحديث';
        case 'loader-gui/error-update-tera-data-failed-2': return '[update] !خطأ: هذا قد يؤدي إلى مزيد من الأخطاء';
        case 'loader-gui/error-update-failed': return ':خطأ: غير قادر على التحديث التلقائي! رسالة الخطأ الكاملة هي';
        case 'loader-gui/proxy-starting': return '[toolbox] …جارى بدء بروكسى الشبكة';
        case 'loader-gui/proxy-stopping': return '[toolbox] …جارى إيقاف بروكسى الشبكة';
        case 'loader-gui/proxy-stopped': return '[toolbox] !بروكسى الشبكة توقف';
        case 'loader-gui/mod-installed': return `[toolbox] "${modInfo.name}" تم تثبيت`;
        case 'loader-gui/mod-uninstalled': return `[toolbox] "${modInfo.name}" تم إلغاء تثبيت`;
        case 'loader-gui/mod-load-toggled': return `[toolbox] ${tokens.enabled ? 'مفُعل' : 'غير مفُعل'} "${tokens.name}"`;
        case 'loader-gui/mod-updates-toggled': return `[toolbox] ${tokens.updatesEnabled ? 'مفُعلة' : 'غير مفُعلة'} "${tokens.name}" التحديثات التلقائية الخاصة ب`;

        // proxy
        case 'proxy/ready': return '[toolbox] !جاهز، في إنتظار بدء مُشغل اللعبة';
        case 'proxy/client-interface-error': return '[toolbox] .غير قادر على بدء خادم واجهة المُشغل';
        case 'proxy/client-interface-error-EADDRINUSE': return '[toolbox] !قيد التشغيل بالفعل. الرجاء إغلاقه أو إعادة تشغيل جهاز الكمبيوتر والمحاولة مرة أخرى TERA Toolbox هناك مثيل آخر لـ';
        case 'proxy/client-interface-error-EADDRNOTAVAIL': return '[toolbox] !خطأ: العنوان غير متاح. أعد تشغيل الكمبيوتر وحاول مرة أخرى';
        case 'proxy/client-interface-connection-error': return `[toolbox] ${tokens.error} :يتعذر إنشاء اتصال بالمُشغل`;
        case 'proxy/client-interface-connected': return `[toolbox] ${tokens.justStarted ? 'مُتصل' : 'إعادة الاتصال'} (${tokens.region} v${tokens.majorPatchVersion}.${tokens.minorPatchVersion})المُشغل`;
        case 'proxy/client-interface-disconnected': return `[toolbox] انقطع اتصال المُشغل`;
        case 'proxy/redirecting-server': return `[toolbox] ${tokens.ip}:${tokens.port} إلى ${tokens.listen_ip}:${tokens.listen_port} من ${tokens.name} (${tokens.region.toUpperCase()}-${tokens.serverId}) توجيه`;
        case 'proxy/warning-unmapped-protocol-1': return `[toolbox] ${tokens.protocolVersion} (${tokens.region.toUpperCase()} v${tokens.majorPatchVersion}.${tokens.minorPatchVersion}) تحذير: إصدار بروتوكول غير معيّن`;
        case 'proxy/warning-unmapped-protocol-2': return '[toolbox] :تحذير: يمكن أن يحدث هذا بسبب أي مما يلي';
        case 'proxy/warning-unmapped-protocol-3': return '[toolbox] .تحذير: 1) تحاول اللعب باستخدام إصدار مُشغل تم إصداره حديثًا وهو غير معتمد حتى الآن';
        case 'proxy/warning-unmapped-protocol-4': return '[toolbox] !تحذير: إذا كان هناك صيانة للعبة خلال الساعات القليلة الماضية، فيرجى الإبلاغ عن هذا';
        case 'proxy/warning-unmapped-protocol-5': return '[toolbox] .تحذير: خلاف ذلك، ربما تم تحديث مُشغلك للحصول على تصحيح تحديثى قادم مبكرًا جدًا';
        case 'proxy/warning-unmapped-protocol-6': return '[toolbox] .تحذير: 2) أنت تحاول اللعب باستخدام إصدار مُشغل قديم';
        case 'proxy/warning-unmapped-protocol-7': return '[toolbox] !تحذير: حاول إصلاح المُشغل أو إعادة تثبيت اللعبة من نقطة الصفر لإصلاح هذا';
        case 'proxy/warning-unmapped-protocol-8': return `[toolbox] ! ${tokens.supportUrl} :تحذير: إذا لم تتمكن من إصلاح ذلك بنفسك، فاطلب المساعدة هنا`;
        case 'proxy/error-cannot-load-protocol': return `! ${tokens.protocolVersion} (${tokens.region.toUpperCase()} v${tokens.majorPatchVersion}.${tokens.minorPatchVersion}) خطأ: غير قادر على تحميل إصدار البروتوكول`;
        case 'proxy/protocol-loaded': return `[toolbox] . ${tokens.protocolVersion} (${tokens.region.toUpperCase()} v${tokens.majorPatchVersion}.${tokens.minorPatchVersion}) تم تحميل بروتوكول إصدار`;

        // update
        case 'update/started': return '[update] !لقد بدأ التحديث التلقائى';
        case 'update/core-module-initialized': return `[update] "${tokens.coreModule}" بدء التطبيق النواه`;
        case 'update/dependency-module-initialized': return `[update] "${tokens.name}" لتطبيق "${tokens.dependency}" بدء التطبيق المساعد`;
        case 'update/warning-module-update-disabled': return `[update] ! ${tokens.name} تحذير: التحديث التلقائي معطل لهذا التطبيق`;
        case 'update/start-module-install': return `[update] ${tokens.name} تثبيت تطبيق`;
        case 'update/start-module-update': return `[update] ${tokens.name} تحديث تطبيق`;
        case 'update/warning-module-no-update-servers': return `[update] !لا يحتوي على أي خوادم تحديث محددة ${tokens.name} تحذير: تطبيق`;
        case 'update/module-download-manifest': return `[update] - (Server ${tokens.serverIndex}) الحصول على قائمة التحديث`;
        case 'update/module-download-file': return `[update] - ${tokens.file} تحميل`;
        case 'update/module-config-changed': return '[update] - !تم تغيير إعدادات التطبيق، إعادة تشغيل التحديث';
        case 'update/module-update-failed-1': return `[update] ${tokens.name}: خطأ: غير قادر على التحديث التلقائي للتطبيق`;
        case 'update/module-update-failed-2-1': return `[update] !واتبع الإرشادات المعطاة أو طلب المساعدة ${tokens.supportUrl} يرجى الانتقال إلى`;
        case 'update/module-update-failed-2-2': return `[update] ${tokens.supportUrl} :بدلاً من ذلك، اسأل هنا`;
        case 'update/module-update-failed-3': return `[update] ${tokens.supportUrl} :يرجى التواصل مع مطور التطبيق أو اسأل هنا`;
        case 'update/tera-data': return '[update] tera-data تحديث';
        case 'update/tera-data-update-failed': return `[update] ${tokens.supportUrl} :الرجاء طلب المساعدة هنا .def / map خطأ: غير قادر على تحديث ملفات التالية`;
        case 'update/finished': return '[update] !اكتمل التحديث التلقائي';

        // gui
        case 'gui/main/start-stop-proxy-running': return '! إيقاف';
        case 'gui/main/start-stop-proxy-not-running': return '! ابدأ';
        case 'gui/main/start-stop-proxy-starting': return '...يبدأ';
        case 'gui/main/start-stop-proxy-stopping': return '...يتوقف';

        case 'gui/main/status-proxy-running': return 'يعمل';
        case 'gui/main/status-proxy-not-running': return 'لا يعمل';
        case 'gui/main/status-update-available': return 'التحديث متاح - يرجى إعادة التشغيل';

        case 'gui/main/modal/buttons/ok': return 'حسناً';
        case 'gui/main/modal/warn-mod-update-disabled': return '! تحذير! قمت بتعطيل التحديثات التلقائية لجميع تطبيقاتك. ذلك سوف يعطل الأشياء فى مرحلة ما. لن نقدم أي مساعدة ما لم تتم إعادة التفعيل';
        case 'gui/main/modal/warn-self-update-disabled': return '! ذلك سوف يعطل الأشياء فى مرحلة ما. لن نقدم أي مساعدة ما لم تتم إعادة التفعيل .Teratoolbox تحذير! قمت بتعطيل التحديثات التلقائية ل';
        case 'gui/main/modal/error-cannot-install-mod-while-running': return '! يعمل. يرجى إيقافه أولاً Teratoolbox لا يمكنك تثبيت التطبيقات و';
        case 'gui/main/modal/error-cannot-uninstall-mod-while-running': return '! يعمل. يرجى إيقافه أولاً Teratoolbox لا يمكنك إلغاء تثبيت التطبيقات و';

        case 'gui/main/static/tabs/log/title': return 'السجل';
        case 'gui/main/static/tabs/log/loading': return '...تحميل سجل البروكسي';

        case 'gui/main/static/tabs/mods/title': return 'تطبيقاتى';
        case 'gui/main/static/tabs/mods/loading': return '...تحميل التطبيقات المثبتة';

        case 'gui/main/static/tabs/newmods/title': return 'أحصل على المزيد من التطبيقات';
        case 'gui/main/static/tabs/newmods/loading': return '...تحميل قائمة التطبيقات';
        case 'gui/main/static/tabs/newmods/content/filter': return '  تنقية الخيارات:  ';
        case 'gui/main/static/tabs/newmods/content/filter/network': return '  تطبيقات شبكة أو بروكسي  ';
        case 'gui/main/static/tabs/newmods/content/filter/client': return '  تطبيقات مُشغل أو واجهة  ';

        case 'gui/main/static/tabs/settings/title': return 'الإعدادات';
        case 'gui/main/static/tabs/settings/loading': return '...تحميل الإعدادات';
        case 'gui/main/static/tabs/settings/content/uilanguage': return 'اللغة';
        case 'gui/main/static/tabs/settings/content/theme': return '‎المَظهَر';
        case 'gui/main/static/tabs/settings/content/autostart': return 'TERA Toolbox التفعيل التلقائي عند فتح';
        case 'gui/main/static/tabs/settings/content/updatelog': return 'إظهار سجل تحديثات مفصل';
        case 'gui/main/static/tabs/settings/content/logtimes': return 'إظهار الوقت فى السجل';
        case 'gui/main/static/tabs/settings/content/noupdate': return 'تعطيل تحديثات التطبيقات';
        case 'gui/main/static/tabs/settings/content/noselfupdate': return 'تعطيل التحديثات الذاتية';
        case 'gui/main/static/tabs/settings/content/devmode': return 'تفعيل وضع المطور';
        case 'gui/main/static/tabs/settings/content/noslstags': return 'إخفاء العلامات في قائمة الخادم';
        case 'gui/main/static/tabs/settings/content/minimizetotray': return 'تقليص الى شريط المهام فى النظام';

        case 'gui/main/static/tabs/help/title': return 'تحتاج إلى مساعدة؟';

        case 'gui/main/static/tabs/modsfolder/title': return 'إظهر مجلد التطبيقات';

        case 'gui/main/static/tabs/credits/title': return 'شكر وتقدير';
        case 'gui/main/static/tabs/credits/loading': return '...تحميل قائمة الشكر وتقدير';
        case 'gui/main/static/tabs/credits/content': return 'شكراً لكل من<br />SaltyMonkey: مُثبت البرنامج<br />Mathicha &amp; Pentagon: نواه الواجهة<br />Foglio: تصميم الشعار<br />Meishu: Tera-Proxy النواه الأصلية ل <br />Toolbox كل مترجمين<br />كل مطورين التطبيقات';

        // tera-client-interface
        case 'tera-client-interface/index/communication-error': return '[toolbox] :خطأ في التواصل مع المُشغل';

        case 'tera-client-interface/gpkmanager/symlink-warning-1': return '[toolbox]  أو اللعبة موجودة على محرك / قسم موجود TERA Toolbox تحذير: يبدو أن';
        case 'tera-client-interface/gpkmanager/symlink-warning-2': return '[toolbox] ! (exFAT أو FAT32 على سبيل المثال لأنه تم إعادة تشكيله باستخدام) تحذير: لا يدعم الروابط الرمزية';
        case 'tera-client-interface/gpkmanager/symlink-warning-3': return '[toolbox] .تحذير: للإحتياط، سيتم تثبيت تطبيقات المُشغل الخاص بك عن طريق إنشاء نسخ للملفات بدلاً من الأصلية';
        case 'tera-client-interface/gpkmanager/symlink-warning-4': return '[toolbox] !تحذير: لاحظ أن هذا قد يبطئ وقت بدء تشغيل المُشغل الخاص بك ويضع ضغطًا على القرص';
        case 'tera-client-interface/gpkmanager/uninstall-error-1': return '[toolbox] :تحذير: غير قادر على إزالة ملف تطبيق المُشغل التالى';
        case 'tera-client-interface/gpkmanager/uninstall-error-2': return `[toolbox] ${tokens.fullPath} :تحذير`;
        case 'tera-client-interface/gpkmanager/uninstall-error-3': return '[toolbox] .تحذير: سيتم حذفها في المرة القادمة التي تبدأ فيها اللعبة، بدلاً من ذلك. يمكنك أيضًا حذفه يدويًا';

        case 'tera-client-interface/module/prefix-log': return `[${tokens.name}]`;
        case 'tera-client-interface/module/prefix-warn': return `[${tokens.name}] :تحذير`;
        case 'tera-client-interface/module/prefix-error': return `[${tokens.name}] :خطأ`;
        case 'tera-client-interface/module/settings-load-error-corrupted-1': return '!لقد أغلقت البرنامج بشكل غير صحيح في آخر مرة استخدمته';
        case 'tera-client-interface/module/settings-load-error-corrupted-2': return `"$ {tokens.name}" - تسبب هذا في تلف إعدادات التطبيق`;
        case 'tera-client-interface/module/settings-load-error-corrupted-3': return '.سيقوم التطبيق بتحميل الإعدادات الاعْتيادية الآن، لذلك اضبطها وفقًا لاحتياجاتك';
        case 'tera-client-interface/module/settings-load-error-corrupted-4': return '!X باستخدام الزر TERA Toolbox يرجى تذكر إغلاق البرنامج بشكل صحيح: أولاً أغلق اللعبة، ثم أغلق';
        case 'tera-client-interface/module/settings-load-error-corrupted-5': return '! TERA Toolbox لا تقم بإغلاق جهاز الكمبيوتر الخاص بك أثناء عمل';
        case 'tera-client-interface/module/settings-load-error-invalid-format-1': return `! "$ {tokens.name}" - صيغة الإعدادات غير صحيحة للتطبيق`;
        case 'tera-client-interface/module/settings-load-error-invalid-format-2': return '.هذا يعني أنك افسدته عند تعديله يدويًا';
        case 'tera-client-interface/module/settings-load-error-invalid-format-3': return '.يرجى إصلاح ملف الإعدادات يدويًا أو حذفه حتى يمكن استعادة الإعدادات الاعْتيادية';
        case 'tera-client-interface/module/settings-load-error-invalid-format-4': return '------------------------------------------';
        case 'tera-client-interface/module/settings-load-error-invalid-format-5': return 'تفاصيل خطأ كبير';
        case 'tera-client-interface/module/settings-load-error-invalid-format-6': return ':المسار الكامل للملف هو';
        case 'tera-client-interface/module/settings-load-error-invalid-format-7': return `  ${tokens.settingsFile}`;
        case 'tera-client-interface/module/settings-load-error-invalid-format-8': return ':رسالة الخطأ الكاملة هي';
        case 'tera-client-interface/module/settings-load-error-invalid-format-9': return `  ${tokens.e}`;
        case 'tera-client-interface/module/settings-load-error-invalid-format-10': return '------------------------------------------';
        case 'tera-client-interface/module/settings-save-error-write': return ':غير قادر على حفظ الإعدادات! رسالة الخطأ الكاملة هى';
        case 'tera-client-interface/module/settings-save-error-stringify': return ':غير قادر على إجراء تسلسل الإعدادات! رسالة الخطأ الكاملة هي';
        case 'tera-client-interface/module/settings-migrate-error-load-migrator': return ':غير قادر على تحميل إعدادات ناقل الملفات! رسالة الخطأ الكاملة هى';
        case 'tera-client-interface/module/settings-migrate-error-run-migrator': return ':حدث خطأ أثناء ترحيل الإعدادات! رسالة الخطأ الكاملة هي';

        case 'tera-client-interface/modulemanager/load-module-info-error': return `[mods] :رسالة الخطأ الكاملة هى ! "${tokens.name}" - خطأ: غير قادر على تحميل معلومات التطبيق`;
        case 'tera-client-interface/modulemanager/duplicate-mod-error': return `[mods] !مكرر "${tokens.name}" – خطأ: تم اكتشاف تطبيق`;
        case 'tera-client-interface/modulemanager/missing-mod-dependency-error': return `[mods] !لكنها ليست مثبته ، "${tokens.dependency}" - يتطلب تثبيت - ${tokens.name} - خطأ: التطبيق`;
        case 'tera-client-interface/modulemanager/mod-conflict-error': return `[mods] !مثبت "${tokens.conflict}" - لا يمكن تحميله بينما - ${tokens.name} - خطأ: التطبيق`;
        case 'tera-client-interface/modulemanager/cannot-load-mod-not-installed': return `[mods] ${tokens.name} - خطأ: محاولة تحميل تطبيق غير مثبت`;
        case 'tera-client-interface/modulemanager/cannot-unload-mod-not-installed': return `[mods] ${tokens.name} - خطأ: محاولة إلغاء تحميل تطبيق غير مثبت`;
        case 'tera-client-interface/modulemanager/cannot-unload-mod-not-loaded': return `[mods] ${tokens.name} - خطأ: محاولة إلغاء تحميل تطبيق لم يتم تحميله`;
        case 'tera-client-interface/modulemanager/mod-loaded': return `[mods] ${tokens.name} - تم تحميل تطبيق`;
        case 'tera-client-interface/modulemanager/mod-unloaded': return `[mods] ${tokens.name} - إلغاء تحميل تطبيق`;
        case 'tera-client-interface/modulemanager/mod-load-error-1': return `[mods] !تعذر تحميله - ${tokens.name} - خطأ: تطبيق`;
        case 'tera-client-interface/modulemanager/mod-load-error-2': return `[mods] ${tokens.supportUrl} - خطأ: يرجى التواصل مع مطور التطبيق`;
        case 'tera-client-interface/modulemanager/mod-unload-error-1': return `[mods] !تعذر إلغاء تحميله - ${tokens.name} - خطأ: تطبيق`;
        case 'tera-client-interface/modulemanager/mod-unload-error-2': return `[mods] ${tokens.supportUrl} - خطأ: يرجى التواصل مع مطور التطبيق`;

        case 'tera-client-interface/process-listener/scan-error': return '[toolbox] :خطأ: غير قادر على البحث عن مُشغل اللعبة! رسالة الخطأ الكاملة هى';

        case 'tera-client-interface/process-listener-dll-injector/inject-error': return `[toolbox] ! (PID ${tokens.pid}) خطأ: غير قادر على الاتصال بمُشغل اللعبة`;
        case 'tera-client-interface/process-listener-dll-injector/inject-error-ENOENT-1': return '[toolbox] .غير موجود. من المحتمل أنه تم حذفه بواسطة برنامج مكافحة الفيروسات injector.exe';
        case 'tera-client-interface/process-listener-dll-injector/inject-error-ENOENT-2': return '[toolbox] ! Injector.exe و TERA Toolbox قم بتعطيل أو إلغاء تثبيت مكافحة الفيروسات أو استثناء';
        case 'tera-client-interface/process-listener-dll-injector/inject-error-EPERM-1': return '[toolbox] .من المحتمل أن يكون قد تم حظره بواسطة برنامج مكافحة الفيروسات Injector.exe تم رفض إذن تشغيل';
        case 'tera-client-interface/process-listener-dll-injector/inject-error-EPERM-2': return '[toolbox] ! Injector.exe و TERA Toolbox قم بتعطيل أو إلغاء تثبيت مكافحة الفيروسات أو استثناء';
        case 'tera-client-interface/process-listener-dll-injector/inject-error-default-error-1': return '[toolbox] .الاتصال بمُشغل اللعبة غير ناجح';
        case 'tera-client-interface/process-listener-dll-injector/inject-error-default-error-2': return '[toolbox] > ! بامتيازات المسؤول TERA Toolbox تأكد من تشغيل';
        case 'tera-client-interface/process-listener-dll-injector/inject-error-default-error-3': return '[toolbox] > ! Injector.exe و TERA Toolbox قم بتعطيل أو إلغاء تثبيت مكافحة الفيروسات أو استثناء';
        case 'tera-client-interface/process-listener-dll-injector/inject-error-default-error-4': return '[toolbox] > ! إذا كان متواجد فى مدير المهام TERA.exe قم بإعادة تشغيل جهاز الكمبيوتر الخاص بك أو قم بإنهاء';
        case 'tera-client-interface/process-listener-dll-injector/inject-error-default-unknown-1': return '[toolbox] . TERA Toolbox من المحتمل أن يكون سبب هذا هو تدخل مكافح الفيروسات. قم بتعطيلة أو إلغاء تثبيته أو استثناء';
        case 'tera-client-interface/process-listener-dll-injector/inject-error-default-unknown-2': return '[toolbox] :رسالة الخطأ كاملة';

        // tera-network-proxy
        case 'tera-network-proxy/connection/dispatch/module/prefix-log': return `[${tokens.name}]`;
        case 'tera-network-proxy/connection/dispatch/module/prefix-warn': return `[${tokens.name}] :تحذير`;
        case 'tera-network-proxy/connection/dispatch/module/prefix-error': return `[${tokens.name}] :خطأ`;
        case 'tera-network-proxy/connection/dispatch/module/settings-load-error-corrupted-1': return '!لقد أغلقت البرنامج بشكل غير صحيح في آخر مرة استخدمته';
        case 'tera-network-proxy/connection/dispatch/module/settings-load-error-corrupted-2': return `"$ {tokens.name}" - تسبب هذا في تلف إعدادات التطبيق`;
        case 'tera-network-proxy/connection/dispatch/module/settings-load-error-corrupted-3': return '.سيقوم التطبيق بتحميل الإعدادات الاعْتيادية الآن، لذلك اضبطها وفقًا لاحتياجاتك';
        case 'tera-network-proxy/connection/dispatch/module/settings-load-error-corrupted-4': return '!X باستخدام الزر TERA Toolbox يرجى تذكر إغلاق البرنامج بشكل صحيح: أولاً أغلق اللعبة، ثم أغلق';
        case 'tera-network-proxy/connection/dispatch/module/settings-load-error-corrupted-5': return '! TERA Toolbox لا تقم بإغلاق جهاز الكمبيوتر الخاص بك أثناء عمل';
        case 'tera-network-proxy/connection/dispatch/module/settings-load-error-invalid-format-1': return `! "$ {tokens.name}" - صيغة الإعدادات غير صحيحة للتطبيق`;
        case 'tera-network-proxy/connection/dispatch/module/settings-load-error-invalid-format-2': return '.هذا يعني أنك افسدته عند تعديله يدويًا';
        case 'tera-network-proxy/connection/dispatch/module/settings-load-error-invalid-format-3': return '.يرجى إصلاح ملف الإعدادات يدويًا أو حذفه حتى يمكن استعادة الإعدادات الاعْتيادية';
        case 'tera-network-proxy/connection/dispatch/module/settings-load-error-invalid-format-4': return '------------------------------------------';
        case 'tera-network-proxy/connection/dispatch/module/settings-load-error-invalid-format-5': return 'تفاصيل خطأ كبير';
        case 'tera-network-proxy/connection/dispatch/module/settings-load-error-invalid-format-6': return ':المسار الكامل للملف هو';
        case 'tera-network-proxy/connection/dispatch/module/settings-load-error-invalid-format-7': return `  ${tokens.settingsFile}`;
        case 'tera-network-proxy/connection/dispatch/module/settings-load-error-invalid-format-8': return ':رسالة الخطأ الكاملة هي';
        case 'tera-network-proxy/connection/dispatch/module/settings-load-error-invalid-format-9': return `  ${tokens.e}`;
        case 'tera-network-proxy/connection/dispatch/module/settings-load-error-invalid-format-10': return '------------------------------------------';
        case 'tera-network-proxy/connection/dispatch/module/settings-save-error-write': return ':غير قادر على حفظ الإعدادات! رسالة الخطأ الكاملة هى';
        case 'tera-network-proxy/connection/dispatch/module/settings-save-error-stringify': return ':غير قادر على إجراء تسلسل الإعدادات! رسالة الخطأ الكاملة هي';
        case 'tera-network-proxy/connection/dispatch/module/settings-migrate-error-load-migrator': return ':غير قادر على تحميل إعدادات ناقل الملفات! رسالة الخطأ الكاملة هى';
        case 'tera-network-proxy/connection/dispatch/module/settings-migrate-error-run-migrator': return ':حدث خطأ أثناء ترحيل الإعدادات! رسالة الخطأ الكاملة هي';
        case 'tera-network-proxy/connection/dispatch/module/tera-game-state-not-loaded': return '. "tera-game-state" قد يحدث عطل في هذا التطبيق، لأنه لم يمكن تحميل';

        case 'tera-network-proxy/connection/dispatch/modulemanager/load-module-info-error': return `[mods] :رسالة الخطأ الكاملة هى ! "${tokens.name}" - خطأ: غير قادر على تحميل معلومات التطبيق`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/duplicate-mod-error': return `[mods] !مكرر "${tokens.name}" – خطأ: تم اكتشاف تطبيق`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/missing-mod-dependency-error': return `[mods] !لكنها ليست مثبته ، "${tokens.dependency}" - يتطلب تثبيت - ${tokens.name} - خطأ: التطبيق`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/mod-conflict-error': return `[mods] !مثبت "${tokens.conflict}" - لا يمكن تحميله بينما - ${tokens.name} - خطأ: التطبيق`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/cannot-load-mod-not-installed': return `[mods] ${tokens.name} - خطأ: محاولة تحميل تطبيق غير مثبت`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/cannot-unload-mod-not-installed': return `[mods] ${tokens.name} - خطأ: محاولة إلغاء تحميل تطبيق غير مثبت`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/cannot-unload-mod-not-loaded': return `[mods] ${tokens.name} - خطأ: محاولة إلغاء تحميل تطبيق لم يتم تحميله`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/mod-loaded': return `[mods] ${tokens.name} - تم تحميل تطبيق`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/mod-unloaded': return `[mods] ${tokens.name} - إلغاء تحميل تطبيق`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/mod-load-error-1': return `[mods] !تعذر تحميله - ${tokens.name} - خطأ: تطبيق`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/mod-load-error-2': return `[mods] ${tokens.supportUrl} - خطأ: يرجى التواصل مع مطور التطبيق`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/mod-unload-error-1': return `[mods] !تعذر إلغاء تحميله - ${tokens.name} - خطأ: تطبيق`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/mod-unload-error-2': return `[mods] ${tokens.supportUrl} - خطأ: يرجى التواصل مع مطور التطبيق`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/unsupported-def-error-1': return `[mods] :قديمة و غير مدعومة Packets يستخدم - "${tokens.name}" - خطأ: تطبيق`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/unsupported-def-error-2': return `[mods] ${tokens.name}.${tokens.version} - :خطأ`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/unsupported-def-error-3': return `[mods] ${tokens.supportUrl} - خطأ: يرجى التواصل مع مطور التطبيق`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/cannot-reload-mod-not-installed': return `[mods] ${tokens.name} - خطأ: محاولة إعادة تحميل تطبيق غير مثبت`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/cannot-reload-mod-not-supported': return `[mods] ${tokens.name} - خطأ: محاولة إعادة تحميل تطبيق لا يدعم التحميل اثناء اللعبة`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/cannot-reload-mod-not-loaded': return `[mods] ${tokens.name} - خطأ: محاولة إعادة إلغاء تحميل تطبيق لم يتم تحميله`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/cannot-reload-mod-unload-failed': return `[mods] ${tokens.name} - :خطأ: فشل إعادة تحميل`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/cannot-reload-mod-load-failed': return `[mods] ${tokens.name} - :خطأ: فشل إعادة تحميل`;
        case 'tera-network-proxy/connection/dispatch/modulemanager/mod-reloaded': return `[mods] ${tokens.name} - :خطأ: تم إعادة تحميل تطبيق`;

        // default
        default: throw new Error(`Invalid string "${str}"!`);
    }
};

module.exports = { Name, GetString };
