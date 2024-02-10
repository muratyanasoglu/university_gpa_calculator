function calculate() {
    // Hesaplama fonksiyonu
    let gradeSystem = document.getElementById("gradeSelect").value;
    let courseCount = parseInt(document.getElementById("courseCount").value);
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 1; i <= courseCount; i++) {
        let courseName = document.getElementById("courseName" + i).value;
        let courseCredit = parseInt(document.getElementById("courseCredit" + i).value);
        let courseGrade = document.getElementById("courseGrade" + i).value;

        totalCredits += courseCredit;
        totalGradePoints += calculateGradePoint(courseGrade, gradeSystem) * courseCredit;
    }

    let average = totalGradePoints / totalCredits;
    let result = document.getElementById("result");
    if (document.getElementById("languageSelect").value === "tr") {
        result.innerHTML = "Not Ortalaması: " + average.toFixed(2);
    } else if (document.getElementById("languageSelect").value === "en") {
        result.innerHTML = "GPA: " + average.toFixed(2);
    } else if (document.getElementById("languageSelect").value === "fr") {
        result.innerHTML = "Moyenne: " + average.toFixed(2);
    } else if (document.getElementById("languageSelect").value === "es") {
        result.innerHTML = "Promedio: " + average.toFixed(2);
    } else if (document.getElementById("languageSelect").value === "ar") {
        result.innerHTML = "معدل النجاح: " + average.toFixed(2);
    } else if (document.getElementById("languageSelect").value === "ru") {
        result.innerHTML = "Средний балл: " + average.toFixed(2);
    } else if (document.getElementById("languageSelect").value === "fa") {
        result.innerHTML = "معدل: " + average.toFixed(2);
    } else if (document.getElementById("languageSelect").value === "el") {
        result.innerHTML = "Μέση Τιμή: " + average.toFixed(2);
    } else if (document.getElementById("languageSelect").value === "ur") {
        result.innerHTML = "معدل: " + average.toFixed(2);
    } else if (document.getElementById("languageSelect").value === "bn") {
        result.innerHTML = "গড়: " + average.toFixed(2);
    } else if (document.getElementById("languageSelect").value === "zh") {
        result.innerHTML = "平均分: " + average.toFixed(2);
    }

}

function clearFields() {
    // Alan temizleme fonksiyonu
    let courseDetails = document.getElementById("courseDetails");
    courseDetails.innerHTML = ""; // Tüm ders bilgilerini temizle
    document.getElementById("courseCount").value = ""; // Dönem ders sayısını temizle
    document.getElementById("result").innerHTML = ""; // Sonuçları temizle
}

// Ders alanlarını dinamik olarak ekleyen fonksiyon
function addCourseFields() {
    let courseCount = parseInt(document.getElementById("courseCount").value);
    let courseDetails = document.getElementById("courseDetails");

    courseDetails.innerHTML = ""; // Önceki ders bilgilerini temizle

    for (let i = 1; i <= courseCount; i++) {
        let courseDiv = document.createElement("div");
        courseDiv.classList.add("course");

        let courseLabel = document.createElement("label");
        let creditLabel = document.createElement("label");
        let gradeLabel = document.createElement("label");

        let courseNameInput = document.createElement("input");
        let creditInput = document.createElement("input");
        let gradeInput = document.createElement("input");

        // Dil seçeneğine göre etiket metinlerini ayarla
        if (document.getElementById("languageSelect").value === "tr") {
            courseLabel.textContent = "Ders " + i + " Adı:";
            creditLabel.textContent = "Kredi:";
            gradeLabel.textContent = "Harf Notu:";
        } else if (document.getElementById("languageSelect").value === "en") {
            courseLabel.textContent = "Course " + i + " Name:";
            creditLabel.textContent = "Credit:";
            gradeLabel.textContent = "Grade:";
        } else if (document.getElementById("languageSelect").value === "fr") {
            courseLabel.textContent = "Nom du cours " + i + ":";
            creditLabel.textContent = "Crédit:";
            gradeLabel.textContent = "Grade:";
        } else if (document.getElementById("languageSelect").value === "es") {
            courseLabel.textContent = "Nombre del curso " + i + ":";
            creditLabel.textContent = "Crédito:";
            gradeLabel.textContent = "Calificación:";
        } else if (document.getElementById("languageSelect").value === "ar") {
            courseLabel.textContent = "اسم المادة " + i + ":";
            creditLabel.textContent = "رصيد:";
            gradeLabel.textContent = "درجة:";
        } else if (document.getElementById("languageSelect").value === "ru") {
            courseLabel.textContent = "Имя курса " + i + ":";
            creditLabel.textContent = "кредит:";
            gradeLabel.textContent = "Оценка:";
        } else if (document.getElementById("languageSelect").value === "fa") {
            courseLabel.textContent = "نام درس " + i + ":";
            creditLabel.textContent = "اعتبار:";
            gradeLabel.textContent = "نمره:";
        } else if (document.getElementById("languageSelect").value === "el") {
            courseLabel.textContent = "Όνομα μαθήματος " + i + ":";
            creditLabel.textContent = "Μονάδα:";
            gradeLabel.textContent = "Βαθμός:";
        } else if (document.getElementById("languageSelect").value === "ur") {
            courseLabel.textContent = i + " کورس کا نام:";
            creditLabel.textContent = "کریڈٹ:";
            gradeLabel.textContent = "گریڈ:";
        } else if (document.getElementById("languageSelect").value === "bn") {
            courseLabel.textContent = i + " কোর্স নাম:";
            creditLabel.textContent = "ক্রেডিট:";
            gradeLabel.textContent = "গ্রেড:";
        } else if (document.getElementById("languageSelect").value === "zh") {
            courseLabel.textContent = i + " 课程名称:";
            creditLabel.textContent = "学分:";
            gradeLabel.textContent = "等级:";
        }

        courseNameInput.type = "text";
        courseNameInput.id = "courseName" + i;
        courseNameInput.required = true;

        creditInput.type = "number";
        creditInput.id = "courseCredit" + i;
        creditInput.min = "1";
        creditInput.required = true;

        gradeInput.type = "text";
        gradeInput.id = "courseGrade" + i;
        gradeInput.required = true;

        courseDiv.appendChild(courseLabel);
        courseDiv.appendChild(courseNameInput);
        courseDiv.appendChild(creditLabel);
        courseDiv.appendChild(creditInput);
        courseDiv.appendChild(gradeLabel);
        courseDiv.appendChild(gradeInput);

        courseDetails.appendChild(courseDiv);
    }
}

// Harf notunu puan karşılığına çeviren fonksiyon
function calculateGradePoint(grade, system) {
    grade = grade.toUpperCase();
    switch (system) {
        case "option1":
        case "option2":
            switch (grade) {
                case "AA":
                    return 4;
                case "BA":
                    return 3.5;
                case "BB":
                    return 3;
                case "CB":
                    return 2.5;
                case "CC":
                    return 2;
                case "DC":
                    return 1.5;
                case "DD":
                    return 1;
                case "FD":
                    return 0.5;
                case "FF":
                    return 0;
                default:
                    return 0;
            }
        case "option3":
            switch (grade) {
                case "A":
                    return 4;
                case "A-":
                    return 3.7;
                case "B+":
                    return 3.3;
                case "B":
                    return 3;
                case "B-":
                    return 2.7;
                case "C+":
                    return 2.3;
                case "C":
                    return 2;
                case "C-":
                    return 1.7;
                case "D+":
                    return 1.3;
                case "D":
                    return 1;
                case "D-":
                    return 0.7;
                case "F":
                    return 0;
                default:
                    return 0;
            }
        case "option4":
            switch (grade) {
                case "A1":
                    return 4;
                case "A2":
                    return 3.7;
                case "A3":
                    return 3.3;
                case "B1":
                    return 3;
                case "B2":
                    return 2.7;
                case "B3":
                    return 2.3;
                case "C1":
                    return 2;
                case "C2":
                    return 1.7;
                case "C3":
                    return 1.3;
                case "D":
                    return 1;
                case "F":
                    return 0;
                default:
                    return 0;
            }
        default:
            return 0;
    }
}
// Dil değişimini sağlayan fonksiyon
function changeLanguage() {
    let languageSelect = document.getElementById("languageSelect");
    let selectedLanguage = languageSelect.value;

    // Sayfa içeriğini güncelle
    switch (selectedLanguage) {
        case "tr":
            updateContent("Üniversite Not Ortalaması Hesaplama Aracı", "Sadece dönem not ortalamasını öğrenmek istiyorum", "Hem dönem hem de genel not ortalamasını öğrenmek istiyorum", "Not Sistemi:", "Dönem Ders Sayısı:", "Ekle", "Hesapla", "Temizle", "Dil:");
            break;
        case "en":
            updateContent("University Grade Average Calculator", "I only want to learn the semester GPA", "I want to learn both the semester and overall GPA", "Grade System:", "Semester Course Count:", "Add", "Calculate", "Clear", "Language:");
            break;
        case "fr":
            updateContent("Calcul de la moyenne des notes universitaires", "Je veux seulement connaître la moyenne des notes de semestre", "Je veux connaître à la fois la moyenne des notes de semestre et globale", "Système de notation:", "Nombre de cours du semestre:", "Ajouter", "Calculer", "Effacer", "Langue:");
            break;
        case "es":
            updateContent("Cálculo del promedio de calificaciones universitarias", "Solo quiero conocer el promedio de calificaciones del semestre", "Quiero conocer tanto el promedio de calificaciones del semestre como el general", "Sistema de calificación:", "Número de cursos del semestre:", "Agregar", "Calcular", "Limpiar", "Idioma:");
            break;
        case "ar":
            updateContent("حساب متوسط ​​درجات الجامعة", "أريد فقط معرفة متوسط ​​درجات الفصل الدراسي", "أريد معرفة متوسط ​​درجات الفصل الدراسي والعام", "نظام الدرجات:", "عدد الدروس في الفصل الدراسي:", "إضافة", "احتساب", "مسح", "لغة:");
            break;
        case "ru":
            updateContent("Калькулятор среднего балла университета", "Я хочу узнать только средний балл семестра", "Я хочу узнать как средний балл семестра, так и общий средний балл", "Система оценок:", "Количество курсов в семестре:", "Добавить", "Рассчитать", "Очистить", "Язык:");
            break;
        case "fa":
            updateContent("ماشین حساب معدل دانشگاه", "من فقط می‌خواهم معدل نیمسال را بدانم", "من می‌خواهم هم معدل نیمسال و هم کلی را بدانم", "سیستم نمرات:", "تعداد دروس نیمسال:", "اضافه کردن", "محاسبه", "پاک کردن", "زبان:");
            break;
        case "el":
            updateContent("Υπολογιστής μέσου όρου πανεπιστημίου", "Θέλω να μάθω μόνο τον μέσο όρο βαθμολογίας του εξαμήνου", "Θέλω να μάθω τόσο τον μέσο όρο βαθμολογίας του εξαμήνου όσο και τον συνολικό μέσο όρο βαθμολογίας", "Σύστημα βαθμολόγησης:", "Αριθμός μαθημάτων εξαμήνου:", "Προσθήκη", "Υπολογισμός", "Καθαρισμός", "Γλώσσα:");
            break;
        case "ur":
            updateContent("یونیورسٹی گریڈ اوسط کیلکولیٹر", "میں صرف سمسٹر جی پی اے جاننا چاہتا ہوں", "میں دونوں سمسٹر اور کل گریڈ اوسط جاننا چاہتا ہوں", "گریڈ نظام:", "سمسٹر کورس کا عدد:", "شامل کریں", "حساب", "صاف کریں", "زبان:");
            break;
        case "bn":
            updateContent("বিশ্ববিদ্যালয় গ্রেড গড় ক্যালকুলেটর", "আমি শুধুমাত্র সেমেস্টার জিপিএ জানতে চাই", "আমি সেমেস্টার এবং সাধারণ গ্রেড গড় উভয় জানতে চাই", "গ্রেড সিস্টেম:", "সেমেস্টার কোর্স সংখ্যা:", "যুক্ত করুন", "গণনা করুন", "মুছুন", "ভাষা:");
            break;
        case "zh":
            updateContent("大学平均分计算器", "我只想知道学期的平均分", "我想知道学期和总体的平均分", "评分系统:", "学期课程数量:", "加", "计算", "清除", "语言:");
            break;
        default:
            updateContent("University Grade Average Calculator", "I only want to learn the semester GPA", "I want to learn both the semester and overall GPA", "Grade System:", "Semester Course Count:", "Add", "Calculate", "Clear", "Language:");
            break;
    }
}


function updateContent(pageTitle, option1, option2, gradeLabel, courseCountLabel, addButton, calculateButton, clearButton, languageLabel) {
    document.getElementById("pageTitle").textContent = pageTitle;
    document.getElementById("labelOption1").textContent = option1;
    document.getElementById("labelOption2").textContent = option2;
    document.getElementById("gradeSelectLabel").textContent = gradeLabel;
    document.getElementById("courseCountLabel").textContent = courseCountLabel;
    document.getElementById("addButton").textContent = addButton;
    document.getElementById("calculateButton").textContent = calculateButton;
    document.getElementById("clearButton").textContent = clearButton;
    document.getElementById("languageLabel").textContent = languageLabel;
}

// Diğer fonksiyonlar burada olacak