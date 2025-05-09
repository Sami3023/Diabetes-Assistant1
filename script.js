let addedFoods = [];
let mealArchive = JSON.parse(localStorage.getItem('mealArchive')) || [];
let bloodSugarRecords = JSON.parse(localStorage.getItem('bloodSugarRecords')) || [];
let currentLang = localStorage.getItem('language') || 'ar';
let userData = JSON.parse(localStorage.getItem('userData')) || {};

const translations = {
    ar: {
        title: "حاسبة الكربوهيدرات",
        insulinCalc: "حساب معاملات الإنسولين",
        bloodSugarTracking: "تتبع مستوى السكر في الدم",
        mealArchive: "أرشيف الوجبات",
        mealTypeLabel: "اختر نوع الوجبة:",
        categoryLabel: "اختر نوع الطعام:",
        foodLabel: "اختر الطعام:",
        weightLabel: "أدخل الوزن (غرام):",
        selectMeal: "-- اختر نوع الوجبة --",
        selectCategory: "-- اختر التصنيف --",
        selectFood: "-- اختر الطعام --",
        weightPlaceholder: "أدخل الوزن",
        addFood: "إضافة إلى الوجبة",
        addedFoods: "الأطعمة المضافة:",
        image: "الصورة",
        foodName: "اسم الطعام",
        weightGram: "الوزن (غرام)",
        carbsGram: "الكربوهيدرات (غ)",
        actions: "الإجراءات",
        calcTotalCarbs: "احسب الكربوهيدرات الكلية",
        reset: "إعادة تعيين",
        carbRatioLabel: "معامل الكربوهيدرات (عدد الكربوهيدرات لكل وحدة أنسولين):",
        carbRatioPlaceholder: "أدخل معامل الكربوهيدرات",
        calcInsulin: "احسب جرعات الإنسولين",
        bloodSugarLabel: "مستوى السكر (ملغ/ديسيلتر):",
        bloodSugarPlaceholder: "أدخل القيمة",
        selectBloodSugarType: "-- اختر --",
        beforeMeal: "قبل الوجبة",
        afterMeal: "بعد الوجبة",
        addBloodSugar: "إضافة القياس",
        exportAsPDF: "تصدير كـ PDF",
        invalidInput: "يرجى إدخال بيانات صحيحة",
        foodAdded: "تمت إضافة الطعام بنجاح",
        invalidBloodSugar: "يرجى إدخال قيمة سكر دم صحيحة (20-600)",
        selectBloodSugarTypeError: "يرجى اختيار نوع القياس",
        addBloodSugarSuccess: "تمت إضافة القياس بنجاح",
        timeLabel: "الوقت",
        breakfast: "إفطار",
        snack1: "وجبة خفيفة 1",
        lunch: "غداء",
        snack2: "وجبة خفيفة 2",
        dinner: "عشاء",
        snack3: "وجبة خفيفة 3",
        bakery: "🍞 الخبز",
        grains_legumes: "🌾 الحبوب والبقوليات",
        snacks: "🍕 المعجنات والمقبلات",
        main_dishes: "🍛 الأطباق الرئيسية",
        desserts: "🍰 الحلويات",
        nuts_seeds: "🥜 المكسرات والبذور",
        vegetables: "🥕 الخضروات",
        fruits: "🍎 الفواكه",
        dairy: "🧀 منتجات الألبان",
        flour: "🌾 الدقيق",
        userData: "بيانات المستخدم",
        nameLabel: "الاسم",
        ageLabel: "العمر",
        genderLabel: "الجنس",
        selectGender: "-- اختر الجنس --",
        male: "ذكر",
        female: "أنثى",
        weightKgPlaceholder: "أدخل الوزن (كغ)",
        namePlaceholder: "أدخل الاسم",
        agePlaceholder: "أدخل العمر",
        saveUserData: "حفظ البيانات",
        userDataSaved: "تم حفظ بيانات المستخدم بنجاح",
        startDateLabel: "تاريخ البداية",
        endDateLabel: "تاريخ النهاية",
        userDataRequired: "يرجى إدخال الاسم على الأقل لحفظ البيانات",
        exportError: "حدث خطأ أثناء تصدير PDF"
    },
    en: {
        title: "Carb Calculator 🍽️",
        insulinCalc: "Insulin Factors Calculation",
        bloodSugarTracking: "Blood Sugar Tracking",
        mealArchive: "Meal Archive",
        mealTypeLabel: "Select Meal Type:",
        categoryLabel: "Select Food Category:",
        foodLabel: "Select Food:",
        weightLabel: "Enter Weight (grams):",
        selectMeal: "-- Select Meal Type --",
        selectCategory: "-- Select Category --",
        selectFood: "-- Select Food --",
        weightPlaceholder: "Enter weight",
        addFood: "Add to Meal",
        addedFoods: "Added Foods:",
        image: "Image",
        foodName: "Food Name",
        weightGram: "Weight (g)",
        carbsGram: "Carbs (g)",
        actions: "Actions",
        calcTotalCarbs: "Calculate Total Carbs",
        reset: "Reset",
        carbRatioLabel: "Carb Ratio (carbs per insulin unit):",
        carbRatioPlaceholder: "Enter carb ratio",
        calcInsulin: "Calculate Insulin Dose",
        bloodSugarLabel: "Blood Sugar (mg/dL):",
        bloodSugarPlaceholder: "Enter blood sugar",
        selectBloodSugarType: "-- Select --",
        beforeMeal: "Before Meal",
        afterMeal: "After Meal",
        addBloodSugar: "Add Measurement",
        exportAsPDF: "Export as PDF",
        invalidInput: "Please enter valid data",
        foodAdded: "Food added successfully",
        invalidBloodSugar: "Please enter a valid blood sugar value (20-600)",
        selectBloodSugarTypeError: "Please select measurement type",
        addBloodSugarSuccess: "Measurement added successfully",
        timeLabel: "Time",
        breakfast: "Breakfast",
        snack1: "Snack 1",
        lunch: "Lunch",
        snack2: "Snack 2",
        dinner: "Dinner",
        snack3: "Snack 3",
        bakery: "🍞 Bakery",
        grains_legumes: "🌾 Grains & Legumes",
        snacks: "🍕 Snacks & Appetizers",
        main_dishes: "🍛 Main Dishes",
        desserts: "🍰 Desserts",
        nuts_seeds: "🥜 Nuts & Seeds",
        vegetables: "🥕 Vegetables",
        fruits: "🍎 Fruits",
        dairy: "🧀 Dairy",
        flour: "🌾 Flour",
        userData: "User Data",
        nameLabel: "Name",
        ageLabel: "Age",
        genderLabel: "Gender",
        selectGender: "-- Select Gender --",
        male: "Male",
        female: "Female",
        weightKgPlaceholder: "Enter weight (kg)",
        namePlaceholder: "Enter name",
        agePlaceholder: "Enter age",
        saveUserData: "Save Data",
        userDataSaved: "User data saved successfully",
        startDateLabel: "Start Date",
        endDateLabel: "End Date",
        userDataRequired: "Please enter at least the name to save the data",
        exportError: "An error occurred while exporting PDF"
    }
};

const foodData = {
    bakery: [
        { name: "🍞 خبز أبيض", carbsPer100g: 56, image: "https://emojicdn.elk.sh/🍞" },
        { name: "🫓 خبز عربي، فطير", carbsPer100g: 54, image: "https://emojicdn.elk.sh/🫓" },
        { name: "🍞 خبز حبوب متعددة", carbsPer100g: 43, image: "https://emojicdn.elk.sh/🍞" },
        { name: "🍞 خبز شعير", carbsPer100g: 48, image: "https://emojicdn.elk.sh/🍞" },
        { name: "🫓 خبز شباتي", carbsPer100g: 46, image: "https://emojicdn.elk.sh/🫓" },
        { name: "🫓 خبز نان", carbsPer100g: 50, image: "https://emojicdn.elk.sh/🫓" },
        { name: "🫓 خبز رقاق", carbsPer100g: 80, image: "https://emojicdn.elk.sh/🫓" },
        { name: "🍔 خبز البرجر", carbsPer100g: 52, image: "https://emojicdn.elk.sh/🍔" },
        { name: "🫓 تورتيلا", carbsPer100g: 51, image: "https://emojicdn.elk.sh/🫓" },
        { name: "🍪 شابورة", carbsPer100g: 72, image: "https://emojicdn.elk.sh/🍪" }
    ],
    grains_legumes: [
        { name: "🍚 أرز أبيض، مطبوخ", carbsPer100g: 28, image: "https://emojicdn.elk.sh/🍚" },
        { name: "🍚 أرز مع عدس، مطبوخ", carbsPer100g: 22, image: "https://emojicdn.elk.sh/🍚" },
        { name: "🍝 مكرونة، مطبوخة", carbsPer100g: 31, image: "https://emojicdn.elk.sh/🍝" },
        { name: "🍝 لازانيا باللحم", carbsPer100g: 15, image: "https://emojicdn.elk.sh/🍝" },
        { name: "🍝 مكرونة بالخضار", carbsPer100g: 27, image: "https://emojicdn.elk.sh/🍝" },
        { name: "🍝 باستا سادة، مطبوخة", carbsPer100g: 31, image: "https://emojicdn.elk.sh/🍝" },
        { name: "🍝 باستا بالخضار", carbsPer100g: 27, image: "https://emojicdn.elk.sh/🍝" },
        { name: "🍝 باستا مع لحم", carbsPer100g: 16, image: "https://emojicdn.elk.sh/🍝" },
        { name: "🍝 مكرونة باشميل", carbsPer100g: 15, image: "https://emojicdn.elk.sh/🍝" },
        { name: "🍝 ماك أند تشيز", carbsPer100g: 22, image: "https://emojicdn.elk.sh/🍝" },
        { name: "🫘 حمص", carbsPer100g: 20, image: "https://emojicdn.elk.sh/🫘" },
        { name: "🍲 فول مدمس، مطبوخ", carbsPer100g: 18, image: "https://emojicdn.elk.sh/🍲" },
        { name: "🫘 فول أبيض مطبوخ", carbsPer100g: 25, image: "https://emojicdn.elk.sh/🫘" },
        { name: "🍲 عدس، مطبوخ", carbsPer100g: 20, image: "https://emojicdn.elk.sh/🍲" },
        { name: "🫘 فاصولياء بيضاء", carbsPer100g: 26, image: "https://emojicdn.elk.sh/🫘" },
        { name: "🫘 بازلاء خضراء، مطبوخة", carbsPer100g: 16, image: "https://emojicdn.elk.sh/🫘" },
        { name: "🥙 فلافل", carbsPer100g: 31, image: "https://emojicdn.elk.sh/🥙" }
    ],
    snacks: [
        { name: "🍕 بيتزا جبن، سميكة", carbsPer100g: 33, image: "https://emojicdn.elk.sh/🍕" },
        { name: "🍕 بيتزا جبن، نحيفة", carbsPer100g: 27, image: "https://emojicdn.elk.sh/🍕" },
        { name: "🍕 بيتزا بيبروني، سميكة", carbsPer100g: 32, image: "https://emojicdn.elk.sh/🍕" },
        { name: "🍕 بيتزا بيبروني، نحيفة", carbsPer100g: 29, image: "https://emojicdn.elk.sh/🍕" },
        { name: "🍕 بيتزا خضار، نحيفة", carbsPer100g: 25, image: "https://emojicdn.elk.sh/🍕" },
        { name: "🍕 بيتزا خضار، سميكة", carbsPer100g: 30, image: "https://emojicdn.elk.sh/🍕" },
        { name: "🥟 فطائر جبنة", carbsPer100g: 40, image: "https://emojicdn.elk.sh/🥟" },
        { name: "🥟 فطائر سبانخ", carbsPer100g: 33, image: "https://emojicdn.elk.sh/🥟" },
        { name: "🥟 فطائر زعتر", carbsPer100g: 56, image: "https://emojicdn.elk.sh/🥟" },
        { name: "🥟 فطائر زعتر بالجبن", carbsPer100g: 41, image: "https://emojicdn.elk.sh/🥟" },
        { name: "🥟 فطائر لينة", carbsPer100g: 35, image: "https://emojicdn.elk.sh/🥟" },
        { name: "🥐 كرواسون جبن", carbsPer100g: 47, image: "https://emojicdn.elk.sh/🥐" },
        { name: "🥟 سمبوسة بالجبن", carbsPer100g: 49, image: "https://emojicdn.elk.sh/🥟" },
        { name: "🥟 سمبوسة بالخضار", carbsPer100g: 33, image: "https://emojicdn.elk.sh/🥟" },
        { name: "🍟 بطاطس طازجة، مقلي", carbsPer100g: 19, image: "https://emojicdn.elk.sh/🍟" },
        { name: "🍟 بطاطس مجمدة، مقلي", carbsPer100g: 31, image: "https://emojicdn.elk.sh/🍟" },
        { name: "🍟 بطاطس مقلي، مطعم", carbsPer100g: 41, image: "https://emojicdn.elk.sh/🍟" },
        { name: "🍟 بطاطس مجمدة، بالفرن", carbsPer100g: 21, image: "https://emojicdn.elk.sh/🍟" },
        { name: "🧀 أصابع جبن موزاريلا", carbsPer100g: 25, image: "https://emojicdn.elk.sh/🧀" }
    ],
    main_dishes: [
        { name: "🍛 برياني", carbsPer100g: 30, image: "https://emojicdn.elk.sh/🍛" },
        { name: "🍲 ثريد", carbsPer100g: 12, image: "https://emojicdn.elk.sh/🍲" },
        { name: "🍆 بابا غنوج", carbsPer100g: 12, image: "https://emojicdn.elk.sh/🍆" },
        { name: "🍆 مسقعة، بدون لحم", carbsPer100g: 11, image: "https://emojicdn.elk.sh/🍆" },
        { name: "🍆 مسقعة مع لحم", carbsPer100g: 6, image: "https://emojicdn.elk.sh/🍆" },
        { name: "🥬 ورق عنب", carbsPer100g: 18, image: "https://emojicdn.elk.sh/🥬" },
        { name: "🍗 مشبك دجاج", carbsPer100g: 18, image: "https://emojicdn.elk.sh/🍗" },
        { name: "🍗 شاورما دجاج", carbsPer100g: 24, image: "https://emojicdn.elk.sh/🍗" },
        { name: "🥩 شاورما لحم", carbsPer100g: 22, image: "https://emojicdn.elk.sh/🥩" },
        { name: "🍚 رز كبسة", carbsPer100g: 38, image: "https://emojicdn.elk.sh/🍚" },
        { name: "🍚 مقلوبة", carbsPer100g: 38, image: "https://emojicdn.elk.sh/🍚" },
        { name: "🍚 مددي", carbsPer100g: 38, image: "https://emojicdn.elk.sh/🍚" },
        { name: "🍚 رز مصري", carbsPer100g: 38, image: "https://emojicdn.elk.sh/🍚" },
        { name: "🍝 مكرونة صلصة حمراء", carbsPer100g: 15, image: "https://emojicdn.elk.sh/🍝" },
        { name: "🍝 مكرونة صلصة بيضاء", carbsPer100g: 25, image: "https://emojicdn.elk.sh/🍝" },
        { name: "🍝 مكرونة صلصة مخلوطة", carbsPer100g: 20, image: "https://emojicdn.elk.sh/🍝" },
        { name: "🍲 جريش", carbsPer100g: 20, image: "https://emojicdn.elk.sh/🍲" },
        { name: "🍲 سليق", carbsPer100g: 20, image: "https://emojicdn.elk.sh/🍲" },
        { name: "🍲 هريس", carbsPer100g: 20, image: "https://emojicdn.elk.sh/🍲" }
    ],
    desserts: [
        { name: "🍩 دونات", carbsPer100g: 64, image: "https://emojicdn.elk.sh/🍩" },
        { name: "🍰 كعك، سادة", carbsPer100g: 56, image: "https://emojicdn.elk.sh/🍰" },
        { name: "🍪 كوكيز", carbsPer100g: 65, image: "https://emojicdn.elk.sh/🍪" },
        { name: "🧁 كب كيك", carbsPer100g: 67, image: "https://emojicdn.elk.sh/🧁" },
        { name: "🍯 بقلاوة", carbsPer100g: 52, image: "https://emojicdn.elk.sh/🍯" }
    ],
    nuts_seeds: [
        { name: "🥜 فستق، غير محمص", carbsPer100g: 27, image: "https://emojicdn.elk.sh/🥜" },
        { name: "🥜 لوز، غير محمص", carbsPer100g: 21, image: "https://emojicdn.elk.sh/🥜" },
        { name: "🥜 كاجو، غير محمص", carbsPer100g: 33, image: "https://emojicdn.elk.sh/🥜" },
        { name: "🥜 عين الجمل، غير محمص", carbsPer100g: 14, image: "https://emojicdn.elk.sh/🥜" },
        { name: "🥜 صنوبر، مكاديميا", carbsPer100g: 13, image: "https://emojicdn.elk.sh/🥜" },
        { name: "🥜 مكسرات مشكلة", carbsPer100g: 23, image: "https://emojicdn.elk.sh/🥜" },
        { name: "🥜 زبدة فول سوداني", carbsPer100g: 22, image: "https://emojicdn.elk.sh/🥜" },
        { name: "🥜 زبدة لوز", carbsPer100g: 19, image: "https://emojicdn.elk.sh/🥜" },
        { name: "🥜 زبدة كاجو", carbsPer100g: 30, image: "https://emojicdn.elk.sh/🥜" },
        { name: "🌻 حب دوار الشمس", carbsPer100g: 16, image: "https://emojicdn.elk.sh/🌻" },
        { name: "🎃 حب القرع", carbsPer100g: 14, image: "https://emojicdn.elk.sh/🎃" },
        { name: "🌾 بذور الشيا، مجففة", carbsPer100g: 42, image: "https://emojicdn.elk.sh/🌾" }
    ],
    vegetables: [
        { name: "🥦 بروكلي، مطبوخ", carbsPer100g: 6, image: "https://emojicdn.elk.sh/🥦" },
        { name: "🎃 قرع، مطبوخ", carbsPer100g: 10, image: "https://emojicdn.elk.sh/🎃" },
        { name: "🥕 جزر", carbsPer100g: 9, image: "https://emojicdn.elk.sh/🥕" },
        { name: "🥔 بطاطس حلوة", carbsPer100g: 20, image: "https://emojicdn.elk.sh/🥔" },
        { name: "🥔 بطاطس", carbsPer100g: 16, image: "https://emojicdn.elk.sh/🥔" },
        { name: "🌽 ذرة، كوز", carbsPer100g: 22, image: "https://emojicdn.elk.sh/🌽" },
        { name: "🌽 ذرة، مسلوقة", carbsPer100g: 22, image: "https://emojicdn.elk.sh/🌽" },
        { name: "🥗 خضار مشكلة، مطبوخة", carbsPer100g: 13, image: "https://emojicdn.elk.sh/🥗" },
        { name: "🥔 بطاطس مسلوقة / مطبوخة", carbsPer100g: 21, image: "https://emojicdn.elk.sh/🥔" },
        { name: "🍟 بطاطس مقلية من البيت", carbsPer100g: 28, image: "https://emojicdn.elk.sh/🍟" },
        { name: "🍟 بطاطس مقلية من المطعم", carbsPer100g: 41, image: "https://emojicdn.elk.sh/🍟" },
        { name: "🍟 بطاطس مقلية مجمدة", carbsPer100g: 32, image: "https://emojicdn.elk.sh/🍟" }
    ],
    fruits: [
        { name: "🥑 أفوكادو، طازج", carbsPer100g: 8, image: "https://emojicdn.elk.sh/🥑" },
        { name: "🍍 أناناس", carbsPer100g: 13, image: "https://emojicdn.elk.sh/🍍" },
        { name: "🍊 برتقال، طازج", carbsPer100g: 12, image: "https://emojicdn.elk.sh/🍊" },
        { name: "🍉 بطيخ، طازج", carbsPer100g: 7, image: "https://emojicdn.elk.sh/🍉" },
        { name: "🍇 تمر", carbsPer100g: 75, image: "https://emojicdn.elk.sh/🍇" },
        { name: "🍎 تفاح، طازج", carbsPer100g: 14, image: "https://emojicdn.elk.sh/🍎" },
        { name: "🍓 توت بري، طازج", carbsPer100g: 14, image: "https://emojicdn.elk.sh/🍓" },
        { name: "🍓 توت عليق أحمر/أسود، طازج", carbsPer100g: 12, image: "https://emojicdn.elk.sh/🍓" },
        { name: "🍈 شمام، طازج", carbsPer100g: 8, image: "https://emojicdn.elk.sh/🍈" },
        { name: "🍐 كمثرى", carbsPer100g: 15, image: "https://emojicdn.elk.sh/🍐" },
        { name: "🍋 ليمون", carbsPer100g: 9, image: "https://emojicdn.elk.sh/🍋" },
        { name: "🍑 خوخ أصفر، طازج", carbsPer100g: 10, image: "https://emojicdn.elk.sh/🍑" },
        { name: "🍓 فراولة، طازجة", carbsPer100g: 8, image: "https://emojicdn.elk.sh/🍓" },
        { name: "🍒 كرز حلو، طازج", carbsPer100g: 16, image: "https://emojicdn.elk.sh/🍒" },
        { name: "🍊 يوسفي، طازج", carbsPer100g: 13, image: "https://emojicdn.elk.sh/🍊" },
        { name: "🍑 نكتارين، طازج", carbsPer100g: 10, image: "https://emojicdn.elk.sh/🍑" },
        { name: "🍇 رمان، طازج", carbsPer100g: 19, image: "https://emojicdn.elk.sh/🍇" },
        { name: "🥝 كيوي، طازج", carbsPer100g: 15, image: "https://emojicdn.elk.sh/🥝" },
        { name: "🍇 تين، طازج", carbsPer100g: 19, image: "https://emojicdn.elk.sh/🍇" },
        { name: "🍑 مشمش", carbsPer100g: 11, image: "https://emojicdn.elk.sh/🍑" },
        { name: "🍌 موز", carbsPer100g: 23, image: "https://emojicdn.elk.sh/🍌" },
        { name: "🍑 خوخ، طازج", carbsPer100g: 9, image: "https://emojicdn.elk.sh/🍑" },
        { name: "🍒 كرز حامض، طازج", carbsPer100g: 12, image: "https://emojicdn.elk.sh/🍒" },
        { name: "🥭 مانجو، طازج", carbsPer100g: 15, image: "https://emojicdn.elk.sh/🥭" },
        { name: "🍅 خرشوف، طازج", carbsPer100g: 17, image: "https://emojicdn.elk.sh/🍅" }
    ],
    dairy: [
        { name: "🥛 حليب كامل الدسم", carbsPer100g: 5, image: "https://emojicdn.elk.sh/🥛" },
        { name: "🥛 حليب خالي الدسم", carbsPer100g: 5, image: "https://emojicdn.elk.sh/🥛" },
        { name: "🥛 حليب مبخر", carbsPer100g: 10, image: "https://emojicdn.elk.sh/🥛" },
        { name: "🥛 زبادي (روب)", carbsPer100g: 4, image: "https://emojicdn.elk.sh/🥛" },
        { name: "🥛 زبادي قليل الدسم", carbsPer100g: 7, image: "https://emojicdn.elk.sh/🥛" },
        { name: "🥛 لبن", carbsPer100g: 7, image: "https://emojicdn.elk.sh/🥛" }
    ],
    flour: [
        { name: "🌾 دقيق القمح", carbsPer100g: 71, image: "https://emojicdn.elk.sh/🌾" },
        { name: "🌾 دقيق القمح متعدد الاستخدام، أبيض", carbsPer100g: 77, image: "https://emojicdn.elk.sh/🌾" },
        { name: "🌽 دقيق الذرة", carbsPer100g: 81, image: "https://emojicdn.elk.sh/🌽" },
        { name: "🌾 دقيق الشعير", carbsPer100g: 74, image: "https://emojicdn.elk.sh/🌾" },
        { name: "🌾 دقيق الشوفان", carbsPer100g: 66, image: "https://emojicdn.elk.sh/🌾" },
        { name: "🌾 دقيق الدخن", carbsPer100g: 75, image: "https://emojicdn.elk.sh/🌾" },
        { name: "🌾 دقيق الحمص", carbsPer100g: 58, image: "https://emojicdn.elk.sh/🌾" },
        { name: "🌾 دقيق الجاودار", carbsPer100g: 75, image: "https://emojicdn.elk.sh/🌾" },
        { name: "🥔 دقيق البطاطس", carbsPer100g: 83, image: "https://emojicdn.elk.sh/🥔" },
        { name: "🍚 دقيق الأرز", carbsPer100g: 76, image: "https://emojicdn.elk.sh/🍚" },
        { name: "🌾 دقيق الحنطة السوداء", carbsPer100g: 71, image: "https://emojicdn.elk.sh/🌾" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
    document.getElementById('mealType').addEventListener('change', resetMealFields);
    document.getElementById('category').addEventListener('change', resetWeightField);
    updateArchiveTable();
    loadUserData();
    // Show modal if no user data exists
    if (!userData.name) {
        openUserDataModal();
    }
    // Initialize flatpickr for date inputs
    initializeDatePickers();
});

function initializeDatePickers() {
    flatpickr("#start-date", {
        dateFormat: "Y-m-d",
        locale: {
            firstDayOfWeek: 1, // Monday as first day
            weekdays: {
                shorthand: currentLang === 'ar' ? ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'] : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                longhand: currentLang === 'ar' ? ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'] : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            },
            months: {
                shorthand: currentLang === 'ar' ? ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'] : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                longhand: currentLang === 'ar' ? ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'] : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            },
            // Use English numbers
            rangeSeparator: ' - ',
            weekAbbreviation: currentLang === 'ar' ? 'أسبوع' : 'Wk',
            scrollTitle: currentLang === 'ar' ? 'اسحب للتمرير' : 'Scroll to increment',
            toggleTitle: currentLang === 'ar' ? 'انقر للتبديل' : 'Click to toggle',
            amPM: ['AM', 'PM']
        },
        onChange: function(selectedDates, dateStr) {
            filterArchive();
        }
    });

    flatpickr("#end-date", {
        dateFormat: "Y-m-d",
        locale: {
            firstDayOfWeek: 1,
            weekdays: {
                shorthand: currentLang === 'ar' ? ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'] : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                longhand: currentLang === 'ar' ? ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'] : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            },
            months: {
                shorthand: currentLang === 'ar' ? ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'] : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                longhand: currentLang === 'ar' ? ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'] : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            },
            rangeSeparator: ' - ',
            weekAbbreviation: currentLang === 'ar' ? 'أسبوع' : 'Wk',
            scrollTitle: currentLang === 'ar' ? 'اسحب للتمرير' : 'Scroll to increment',
            toggleTitle: currentLang === 'ar' ? 'انقر للتبديل' : 'Click to toggle',
            amPM: ['AM', 'PM']
        },
        onChange: function(selectedDates, dateStr) {
            filterArchive();
        }
    });
}

function openUserDataModal() {
    const modal = document.getElementById('user-data-modal');
    modal.style.display = 'flex';
    document.body.classList.add('modal-active');
}

function closeUserDataModal() {
    const modal = document.getElementById('user-data-modal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-active');
}

function resetMealFields() {
    const mealType = document.getElementById('mealType').value;
    if (mealType !== "0") {
        document.getElementById('category').value = "0";
        document.getElementById('food').innerHTML = '<option value="0" data-lang="selectFood">-- اختر الطعام --</option>';
        document.getElementById('weight').value = '';
        addedFoods = [];
        updateFoodTable();
        document.getElementById('result').innerHTML = '';
        document.getElementById('insulinResult').innerHTML = '';
    }
}

function resetWeightField() {
    document.getElementById('weight').value = '';
    updateFoodList();
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`button[onclick="showSection('${sectionId}')"]`).classList.add('active');
    if (sectionId === 'meal-archive') updateArchiveTable();
}

function showForm(formId) {
    document.querySelectorAll('.calculator-form').forEach(form => {
        const currentFormId = form.id.split('-')[0];
        resetFields(currentFormId);
        form.classList.remove('active');
    });
    document.getElementById(`${formId}-form`).classList.add('active');
}

function calculateISF() {
    const tdi = parseFloat(document.getElementById('tdi-isf').value);
    if (isNaN(tdi) || tdi <= 0) {
        showToast(translations[currentLang].invalidInput);
        return;
    }
    const isf = 1700 / tdi;
    document.getElementById('isf-result').innerHTML = `${translations[currentLang].insulinCalc} (ISF): ${isf.toFixed(1)} ${currentLang === 'ar' ? 'ملغ/ديسيلتر لكل وحدة' : 'mg/dL per unit'}`;
}

function calculateCIR() {
    const tdi = parseFloat(document.getElementById('tdi-cir').value);
    if (isNaN(tdi) || tdi <= 0) {
        showToast(translations[currentLang].invalidInput);
        return;
    }
    const cir = 500 / tdi;
    document.getElementById('cir-result').innerHTML = `${translations[currentLang].carbRatioLabel} (CIR): ${cir.toFixed(1)} ${currentLang === 'ar' ? 'غرام لكل وحدة' : 'grams per unit'}`;
}

function calculateCorrectionDose() {
    const currentSugar = parseFloat(document.getElementById('current-sugar').value);
    const targetSugar = parseFloat(document.getElementById('target-sugar').value);
    const isf = parseFloat(document.getElementById('isf-correction').value);

    if (isNaN(currentSugar) || isNaN(targetSugar) || isNaN(isf) || isf <= 0) {
        showToast(translations[currentLang].invalidInput);
        return;
    }

    const correctionDose = (currentSugar - targetSugar) / isf;
    document.getElementById('correction-result').innerHTML = `${currentLang === 'ar' ? 'الجرعة التصحيحية' : 'Correction Dose'}: ${correctionDose.toFixed(1)} ${currentLang === 'ar' ? 'وحدة' : 'units'}`;
}

function resetFields(formId) {
    document.getElementById(`${formId}-form`).querySelectorAll('input').forEach(input => input.value = '');
    document.getElementById(`${formId}-result`).innerHTML = '';
}

function updateFoodList() {
    const category = document.getElementById('category').value;
    const foodSelect = document.getElementById('food');
    foodSelect.innerHTML = `<option value="0" data-lang="selectFood">${translations[currentLang].selectFood}</option>`;

    if (category !== "0" && foodData[category]) {
        foodData[category].forEach(food => {
            const option = document.createElement('option');
            option.value = food.name;
            option.textContent = food.name;
            foodSelect.appendChild(option);
        });
    }
}

function addFood() {
    const mealType = document.getElementById('mealType').value;
    const category = document.getElementById('category').value;
    const food = document.getElementById('food').value;
    const weight = parseFloat(document.getElementById('weight').value);

    if (mealType === "0" || category === "0" || food === "0" || isNaN(weight) || weight <= 0) {
        showToast(translations[currentLang].invalidInput);
        return;
    }

    const foodItem = foodData[category].find(f => f.name === food);
    const carbs = (foodItem.carbsPer100g / 100) * weight;

    addedFoods.push({ name: food, weight, carbs, image: foodItem.image });
    updateFoodTable();
    document.getElementById('weight').value = '';
    showToast(translations[currentLang].foodAdded, 'success');
}

function updateFoodTable() {
    const tbody = document.getElementById('foodTable').querySelector('tbody');
    tbody.innerHTML = '';
    addedFoods.forEach((food, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${food.image}" alt="${food.name}" style="width: 40px; height: 40px;"></td>
            <td>${food.name}</td>
            <td>${food.weight}</td>
            <td>${food.carbs.toFixed(1)}</td>
            <td><button class="reset" onclick="removeFood(${index})">${translations[currentLang].reset}</button></td>
        `;
        tbody.appendChild(row);
    });
}

function removeFood(index) {
    addedFoods.splice(index, 1);
    updateFoodTable();
}

function calculateTotalCarbs() {
    if (addedFoods.length === 0) {
        showToast(translations[currentLang].invalidInput);
        return;
    }
    const totalCarbs = addedFoods.reduce((sum, food) => sum + food.carbs, 0);
    document.getElementById('result').innerHTML = `${translations[currentLang].calcTotalCarbs}: ${totalCarbs.toFixed(1)} ${currentLang === 'ar' ? 'غرام' : 'grams'}`;

    const mealType = document.getElementById('mealType').value;
    const mealTime = new Date();
    const mealData = {
        date: mealTime.toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US'),
        mealType: mealType,
        totalCarbs: totalCarbs.toFixed(1),
        insulinDose: null,
        foods: addedFoods.map(food => `${food.name} (${food.weight} ${currentLang === 'ar' ? 'غرام' : 'grams'})`).join(', '),
        timestamp: mealTime.toISOString(),
        bloodSugarBefore: null,
        bloodSugarBeforeTime: null,
        bloodSugarAfter: null,
        bloodSugarAfterTime: null,
        userData: { ...userData } // Attach user data to meal
    };
    mealArchive.push(mealData);
    localStorage.setItem('mealArchive', JSON.stringify(mealArchive));
    updateArchiveTable();
}

function calculateInsulinDose() {
    const totalCarbs = addedFoods.reduce((sum, food) => sum + food.carbs, 0);
    const carbRatio = parseFloat(document.getElementById('carbRatio').value);
    const mealType = document.getElementById('mealType').value;

    if (isNaN(carbRatio) || carbRatio <= 0 || addedFoods.length === 0 || mealType === "0") {
        showToast(translations[currentLang].invalidInput);
        return;
    }

    const insulinDose = totalCarbs / carbRatio;
    document.getElementById('insulinResult').innerHTML = `${translations[currentLang].calcInsulin}: ${insulinDose.toFixed(1)} ${currentLang === 'ar' ? 'وحدة' : 'units'}`;

    const latestMeal = mealArchive.filter(meal => meal.mealType === mealType).slice(-1)[0];
    if (latestMeal) {
        const carbsMatch = Math.abs(parseFloat(latestMeal.totalCarbs) - totalCarbs) < 0.1;
        if (carbsMatch) {
            latestMeal.insulinDose = insulinDose.toFixed(1);
            localStorage.setItem('mealArchive', JSON.stringify(mealArchive));
            updateArchiveTable();
        } else {
            showToast(currentLang === 'ar' ? 'لم يتم العثور على وجبة مطابقة في الأرشيف' : 'No matching meal found in archive');
        }
    } else {
        showToast(currentLang === 'ar' ? 'يرجى حساب الكربوهيدرات أولاً وإضافتها إلى الأرشيف' : 'Please calculate carbs first and add to archive');
    }
}

function resetAll() {
    addedFoods = [];
    updateFoodTable();
    document.getElementById('mealType').value = "0";
    document.getElementById('category').value = "0";
    document.getElementById('food').innerHTML = `<option value="0" data-lang="selectFood">${translations[currentLang].selectFood}</option>`;
    document.getElementById('weight').value = '';
    document.getElementById('carbRatio').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('insulinResult').innerHTML = '';
}

function addBloodSugar() {
    const bloodSugar = parseFloat(document.getElementById('bloodSugar').value);
    const type = document.getElementById('bloodSugarType').value;
    const mealType = document.getElementById('mealType').value;

    if (isNaN(bloodSugar) || bloodSugar < 20 || bloodSugar > 600) {
        showToast(translations[currentLang].invalidBloodSugar);
        return;
    }

    if (!type) {
        showToast(translations[currentLang].selectBloodSugarTypeError);
        return;
    }

    if (!mealType || mealType === "0") {
        showToast(currentLang === 'ar' ? 'يرجى اختيار نوع الوجبة أولاً' : 'Please select a meal type first');
        return;
    }

    const currentTime = new Date();
    const record = {
        value: bloodSugar,
        time: currentTime.toISOString(),
        type: type,
        mealType: mealType
    };

    bloodSugarRecords.push(record);
    localStorage.setItem('bloodSugarRecords', JSON.stringify(bloodSugarRecords));

    const latestMeal = mealArchive.filter(meal => meal.mealType === mealType).slice(-1)[0];
    if (latestMeal) {
        const mealTimestamp = new Date(latestMeal.timestamp).getTime();
        const recordTime = new Date(record.time).getTime();
        const timeDiff = Math.abs(recordTime - mealTimestamp);
        const timeThreshold = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

        if (timeDiff <= timeThreshold) {
            if (record.type === 'before') {
                latestMeal.bloodSugarBefore = record.value;
                latestMeal.bloodSugarBeforeTime = currentTime.toLocaleTimeString(currentLang === 'ar' ? 'ar-EG' : 'en-US', { hour12: true, hour: 'numeric', minute: '2-digit' });
            } else if (record.type === 'after') {
                latestMeal.bloodSugarAfter = record.value;
                latestMeal.bloodSugarAfterTime = currentTime.toLocaleTimeString(currentLang === 'ar' ? 'ar-EG' : 'en-US', { hour12: true, hour: 'numeric', minute: '2-digit' });
            }
            localStorage.setItem('mealArchive', JSON.stringify(mealArchive));
            updateArchiveTable();
        }
    }

    document.getElementById('bloodSugar').value = '';
    document.getElementById('bloodSugarType').value = '';
    showToast(translations[currentLang].addBloodSugarSuccess, 'success');
}

function updateArchiveTable(startDate = null, endDate = null) {
    const mealTypes = ['breakfast', 'snack1', 'lunch', 'snack2', 'dinner', 'snack3'];
    let filteredArchive = mealArchive;

    // Filter by date range if provided
    if (startDate && endDate) {
        filteredArchive = mealArchive.filter(meal => {
            const mealDate = new Date(meal.timestamp).toISOString().split('T')[0];
            return mealDate >= startDate && mealDate <= endDate;
        });
    }

    // Display user data above the table
    const userDataDisplay = document.getElementById('user-data-display');
    if (userData.name) {
        let userInfo = `<strong>${translations[currentLang].userData}:</strong><br>`;
        if (userData.name) userInfo += `${translations[currentLang].nameLabel}: ${userData.name}<br>`;
        if (userData.age) userInfo += `${translations[currentLang].ageLabel}: ${userData.age}<br>`;
        if (userData.gender) userInfo += `${translations[currentLang].genderLabel}: ${translations[currentLang][userData.gender]}<br>`;
        if (userData.weight) userInfo += `${translations[currentLang].weightLabel}: ${userData.weight} ${currentLang === 'ar' ? 'كغ' : 'kg'}`;
        userDataDisplay.innerHTML = userInfo;
    } else {
        userDataDisplay.innerHTML = '';
    }

    const groupedData = {};
    filteredArchive.forEach(meal => {
        if (!groupedData[meal.date]) groupedData[meal.date] = {};
        groupedData[meal.date][meal.mealType] = meal;
    });

    const tableBody = document.getElementById('archive-table-body');
    tableBody.innerHTML = '';
    for (const date in groupedData) {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${date}</td>`;
        mealTypes.forEach(type => {
            const meal = groupedData[date][type];
            const carbsLabel = currentLang === 'ar' ? 'الكربوهيدرات' : 'Carbs';
            const insulinLabel = currentLang === 'ar' ? 'الأنسولين' : 'Insulin';
            const gramLabel = currentLang === 'ar' ? 'غ' : 'g';
            const unitLabel = currentLang === 'ar' ? 'وحدة' : 'u';
            const bsBeforeLabel = currentLang === 'ar' ? 'سكر الدم قبل' : 'Blood Sugar Before';
            const bsAfterLabel = currentLang === 'ar' ? 'سكر الدم بعد' : 'Blood Sugar After';
            const mgDlLabel = currentLang === 'ar' ? 'ملغ/ديسيلتر' : 'mg/dL';
            const timeLabel = translations[currentLang].timeLabel;

            if (meal) {
                row.innerHTML += `
                    <td>
                        <div class="meal-details">
                            <span class="foods">${meal.foods}</span>
                            <span class="carbs"><span class="label">${carbsLabel}:</span> ${meal.totalCarbs} ${gramLabel}</span>
                            ${meal.insulinDose ? `<span class="insulin"><span class="label">${insulinLabel}:</span> ${meal.insulinDose} ${unitLabel}</span>` : ''}
                            ${meal.bloodSugarBefore ? `<span class="blood-sugar-before"><span class="label">${bsBeforeLabel}:</span> ${meal.bloodSugarBefore} ${mgDlLabel} <span class="time">(${timeLabel}: ${meal.bloodSugarBeforeTime})</span></span>` : ''}
                            ${meal.bloodSugarAfter ? `<span class="blood-sugar-after"><span class="label">${bsAfterLabel}:</span> ${meal.bloodSugarAfter} ${mgDlLabel} <span class="time">(${timeLabel}: ${meal.bloodSugarAfterTime})</span></span>` : ''}
                        </div>
                    </td>`;
            } else {
                row.innerHTML += '<td>-</td>';
            }
        });
        tableBody.appendChild(row);
    }
}

function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 10;
    const maxWidth = pageWidth - 2 * margin;
    let yOffset = margin;

    // Note: For direct Arabic text support, consider adding Amiri font as Base64
    // Example: doc.addFileToVFS('Amiri-Regular.ttf', 'BASE64_STRING');
    // doc.addFont('Amiri-Regular.ttf', 'Amiri', 'normal');
    // Current approach uses screenshots to avoid font issues

    // Capture User Data
    const userDataElement = document.getElementById('user-data-display');
    if (userDataElement && userDataElement.innerHTML.trim() !== '') {
        html2canvas(userDataElement, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgProps = doc.getImageProperties(imgData);
            const imgHeight = (imgProps.height * maxWidth) / imgProps.width;

            if (yOffset + imgHeight > pageHeight - margin) {
                doc.addPage();
                yOffset = margin;
            }

            doc.addImage(imgData, 'PNG', margin, yOffset, maxWidth, imgHeight);
            yOffset += imgHeight + 10;

            // Capture Archive Table
            const table = document.getElementById('archive-table');
            html2canvas(table, { scale: 2 }).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const imgProps = doc.getImageProperties(imgData);
                const imgHeight = (imgProps.height * maxWidth) / imgProps.width;

                // Handle multi-page table
                let remainingHeight = imgHeight;
                let imgY = 0;

                while (remainingHeight > 0) {
                    const availableHeight = pageHeight - yOffset - margin;
                    const segmentHeight = Math.min(remainingHeight, availableHeight);
                    const segmentCanvas = document.createElement('canvas');
                    segmentCanvas.width = canvas.width;
                    segmentCanvas.height = (segmentHeight / imgHeight) * canvas.height;
                    const ctx = segmentCanvas.getContext('2d');
                    ctx.drawImage(
                        canvas,
                        0,
                        (imgY / imgHeight) * canvas.height,
                        canvas.width,
                        (segmentHeight / imgHeight) * canvas.height,
                        0,
                        0,
                        canvas.width,
                        segmentCanvas.height
                    );

                    const segmentImgData = segmentCanvas.toDataURL('image/png');
                    doc.addImage(segmentImgData, 'PNG', margin, yOffset, maxWidth, segmentHeight);

                    remainingHeight -= segmentHeight;
                    imgY += segmentHeight;

                    if (remainingHeight > 0) {
                        doc.addPage();
                        yOffset = margin;
                    } else {
                        yOffset += segmentHeight + margin;
                    }
                }

                doc.save('meal_archive.pdf');
            }).catch(error => {
                console.error('Error capturing table:', error);
                showToast(translations[currentLang].exportError, 'error');
            });
        }).catch(error => {
            console.error('Error capturing user data:', error);
            showToast(translations[currentLang].exportError, 'error');
        });
    } else {
        // If no user data, capture only the table
        const table = document.getElementById('archive-table');
        html2canvas(table, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgProps = doc.getImageProperties(imgData);
            const imgHeight = (imgProps.height * maxWidth) / imgProps.width;

            // Handle multi-page table
            let remainingHeight = imgHeight;
            let imgY = 0;

            while (remainingHeight > 0) {
                const availableHeight = pageHeight - yOffset - margin;
                const segmentHeight = Math.min(remainingHeight, availableHeight);
                const segmentCanvas = document.createElement('canvas');
                segmentCanvas.width = canvas.width;
                segmentCanvas.height = (segmentHeight / imgHeight) * canvas.height;
                const ctx = segmentCanvas.getContext('2d');
                ctx.drawImage(
                    canvas,
                    0,
                    (imgY / imgHeight) * canvas.height,
                    canvas.width,
                    (segmentHeight / imgHeight) * canvas.height,
                    0,
                    0,
                    canvas.width,
                    segmentCanvas.height
                );

                const segmentImgData = segmentCanvas.toDataURL('image/png');
                doc.addImage(segmentImgData, 'PNG', margin, yOffset, maxWidth, segmentHeight);

                remainingHeight -= segmentHeight;
                imgY += segmentHeight;

                if (remainingHeight > 0) {
                    doc.addPage();
                    yOffset = margin;
                } else {
                    yOffset += segmentHeight + margin;
                }
            }

            doc.save('meal_archive.pdf');
        }).catch(error => {
            console.error('Error capturing table:', error);
            showToast(translations[currentLang].exportError, 'error');
        });
    }
}

function saveUserData() {
    const name = document.getElementById('user-name').value.trim();
    const age = parseInt(document.getElementById('user-age').value);
    const gender = document.getElementById('user-gender').value;
    const weight = parseFloat(document.getElementById('user-weight').value);

    if (!name) {
        showToast(translations[currentLang].userDataRequired);
        return;
    }

    userData = { name };
    if (age && !isNaN(age) && age > 0) userData.age = age;
    if (gender && gender !== '') userData.gender = gender;
    if (weight && !isNaN(weight) && weight > 0) userData.weight = weight;

    localStorage.setItem('userData', JSON.stringify(userData));
    showToast(translations[currentLang].userDataSaved, 'success');
    loadUserData();
    closeUserDataModal();

    // Update archive with user data
    mealArchive.forEach(meal => {
        meal.userData = { ...userData };
    });
    localStorage.setItem('mealArchive', JSON.stringify(mealArchive));
    updateArchiveTable();
}

function resetUserData() {
    userData = {};
    localStorage.removeItem('userData');
    document.getElementById('user-name').value = '';
    document.getElementById('user-age').value = '';
    document.getElementById('user-gender').value = '';
    document.getElementById('user-weight').value = '';
    showToast(translations[currentLang].reset, 'success');
    // Reopen modal to force entering new data
    openUserDataModal();
}

function loadUserData() {
    document.getElementById('user-name').value = userData.name || '';
    document.getElementById('user-age').value = userData.age || '';
    document.getElementById('user-gender').value = userData.gender || '';
    document.getElementById('user-weight').value = userData.weight || '';
}

function filterArchive() {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    if (startDate && endDate && startDate <= endDate) {
        updateArchiveTable(startDate, endDate);
    } else {
        updateArchiveTable();
    }
}

function toggleTheme() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.getElementById('theme-icon').src = isDark ? 'https://emojicdn.elk.sh/☀️' : 'https://emojicdn.elk.sh/🌙';
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', currentLang);
    updateLanguage();
    // Reinitialize date pickers to update locale
    initializeDatePickers();
}

function updateLanguage() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[currentLang][key];
    });
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        element.placeholder = translations[currentLang][key];
    });
    updateFoodTable();
    updateArchiveTable();
}

function showToast(message, type = 'error') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}