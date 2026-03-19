// my-website/script.js
(() => {
  const translations = {
    ar: {
      pageTitle: "حقيبة الكتف الذكية للحماية من السرقة - عرض خاص",
      topbarHeadline: "عرض خاص اليوم: حقيبة الكتف الذكية للحماية من السرقة",
      freeDelivery: "🚚 توصيل مجاني",
      kicker: "🔥 عرض محدود - 4 أيام فقط",
      productTitle: "حقيبة الكتف الذكية للحماية من السرقة: أناقة، أمان، وراحة يومية",
      heroSubtitle:
        "تصميم ذكي وعصري كيوفر حماية أفضل لممتلكاتك مع جيوب منظمة وسحاب آمن، باش تبقى مرتاح فالتنقل اليومي بلا قلق.",
      offerUrgency: "العرض صالح غير لمدة 4 أيام",
      countdownTitle: "الوقت المتبقي:",
      days: "أيام",
      hours: "ساعات",
      minutes: "دقائق",
      seconds: "ثواني",
      orderTitle: "🛍️ كمّل الطلب ديالك دابا",
      formIntro: "عمّر المعلومات ديالك وغادي نتاصلوا بيك بسرعة للتأكيد.",
      formBadges: "✅ حماية أكثر | 🚚 توصيل مجاني | 💵 الدفع عند الاستلام",
      nameLabel: "الإسم الكامل",
      phoneLabel: "رقم الهاتف",
      addressLabel: "المدينة / العنوان",
      quantityLabel: "الكمية",
      totalLabel: "المجموع:",
      orderNow: "طلب دابا",
      whatsapp: "🟢 تواصل واتساب",
      benefitsTitle: "علاش هاد الحقيبة هو الأنسب ليك؟",
      benefit1: "🔒 مضاد للسرقة: سحاب خلفي مخفي وقفل متين",
      benefit2: "🧥 سهل الارتداء: حمالات قابلة للتعديل تناسب الجميع",
      benefit3: "👗 موديل عصري: تصاميم عصرية تناسب الرجال والنساء",
      benefit4: "🌧️ غير قابلة للاختراق: قماش معالج يصد الماء تماماً",
      story1Title: "حقيبة ذكية مضادة للسرقة بتصميم عصري",
      story1Text:
        "حقيبة كتف ذكية مضادة للسرقة، مصنوعة من قماش مقاوم للماء والخدش. تتميز بقفل رقمي بكلمة المرور وسحاب مخفي لحماية أغراضك. حزام قابل للتعديل يجعلها مريحة للارتداء على الكتف أو الصدر. تصميم رمادي أنيق وكومباكت يناسب الخروجات اليومية، السفر، والجامعة.",
      story2Title: "تنظيم ذكي وسهولة فالاستعمال",
      story2Text:
        "الجيوب الداخلية والخارجية منظمة باش تلقى حاجاتك بسرعة: تلفون، بطاقات، مفاتيح، وشاحن. كلشي كيكون مرتب وقدام يدك.",
      story3Title: "قفل رقمي متطور لمقاومة السرقة",
      story3Text:
        "تم تزويد الحقيبة بنظام قفل مشفر سري (غير قابل للكسر) يثبت السحابات الرئيسية. يمكنك ضبط رمز سري خاص بك لفتح الجيب الأمامي، مما يجعل محتوياتك آمنة تماماً من أي محاولة عبث أو سرقة. تصميم القفل أنيق ومتين ولا يثقل الحقيبة.",
      galleryTitle: "صور حقيقية للمنتج",
      finalCtaTitle: "خد القرار دابا واستافد من ثمن 149 درهم قبل ما يسالي العرض",
      finalCtaText:
        "الكمية محدودة والعرض مؤقت. عمر المعلومات ديالك فالفورم اللي فوق، أو تواصل معنا مباشرة عبر واتساب للتأكيد بسرعة.",
      footerText: "© 2026 حقيبة الكتف الذكية للحماية من السرقة - جميع الحقوق محفوظة",
      successMsg: "تم تسجيل الطلب ديالك بنجاح! غادي نتاصلوا بيك قريباً.",
      errors: {
        nameRequired: "دخل الإسم الكامل من فضلك.",
        phoneRequired: "دخل رقم الهاتف من فضلك.",
        phoneInvalid: "رقم الهاتف خاصو يكون 10 أرقام بالضبط.",
        addressRequired: "دخل المدينة أو العنوان من فضلك.",
        quantityRequired: "دخل الكمية الصحيحة من فضلك."
      },
      submitSuccess: "تم تسجيل الطلب بنجاح!",
      submitError: "حدث خطأ في الإرسال، حاول مرة أخرى."
    },
    fr: {
      pageTitle: "Sac à bandoulière intelligent anti-vol - Offre spéciale",
      topbarHeadline: "Offre du jour : sac à bandoulière intelligent anti-vol",
      freeDelivery: "🚚 Livraison gratuite",
      kicker: "🔥 Offre limitée - 4 jours seulement",
      productTitle: "Sac à bandoulière intelligent anti-vol : élégance, sécurité et confort quotidien",
      heroSubtitle:
        "Design intelligent et moderne qui offre une meilleure protection pour vos biens avec des poches organisées et une fermeture éclair sécurisée, pour que vous soyez à l'aise dans vos déplacements quotidiens sans souci.",
      offerUrgency: "Offre valable 4 jours seulement",
      countdownTitle: "Temps restant :",
      days: "Jours",
      hours: "Heures",
      minutes: "Minutes",
      seconds: "Secondes",
      orderTitle: "🛍️ Finalisez votre commande maintenant",
      formIntro: "Remplissez vos informations et nous vous contacterons rapidement pour confirmation.",
      formBadges: "✅ Plus de sécurité | 🚚 Livraison gratuite | 💵 Paiement à la livraison",
      nameLabel: "Nom complet",
      phoneLabel: "Numéro de téléphone",
      addressLabel: "Ville / Adresse",
      quantityLabel: "Quantité",
      totalLabel: "Total :",
      orderNow: "Commander maintenant",
      whatsapp: "🟢 Contact WhatsApp",
      benefitsTitle: "Pourquoi ce sac est-il le plus adapté pour vous ?",
      benefit1: "🔒 Anti-vol : fermeture arrière cachée et verrou robuste",
      benefit2: "🧥 Facile à porter : bretelles ajustables pour tous",
      benefit3: "👗 Modèle tendance : designs modernes pour hommes et femmes",
      benefit4: "🌧️ Imperméable : tissu traité qui repousse totalement l'eau",
      story1Title: "Votre bouclier quotidien anti-vol",
      story1Text:
        "Spécialement conçu pour protéger vos biens dans les endroits bondés. Il contient des poches cachées et des fermetures éclair arrière qui ne peuvent pas être ouvertes sans que vous le remarquiez. Tissu extérieur renforcé difficile à couper, et verrou latéral sécurisé ajoutant une couche de protection supplémentaire.",
      story2Title: "Organisation intelligente et facilité d'utilisation",
      story2Text:
        "Les poches intérieures et extérieures sont organisées pour trouver rapidement vos affaires : téléphone, cartes, clés et chargeur. Tout est rangé et à portée de main.",
      story3Title: "Verrou numérique avancé résistant au vol",
      story3Text:
        "Le sac est équipé d'un système de verrouillage codé secret (incassable) qui fixe les fermetures éclair principales. Vous pouvez définir votre propre code secret pour ouvrir la poche avant, rendant son contenu totalement sécurisé contre toute tentative de manipulation ou de vol. Le design du verrou est élégant, robuste et n'alourdit pas le sac.",
      galleryTitle: "Images réelles du produit",
      finalCtaTitle: "Prenez la décision maintenant et profitez du prix de 149 DH avant la fin de l'offre",
      finalCtaText:
        "Le stock est limité et l'offre est temporaire. Remplissez vos informations dans le formulaire ci-dessus, ou contactez-nous directement via WhatsApp pour une confirmation rapide.",
      footerText: "© 2026 Sac à bandoulière intelligent anti-vol - Tous droits réservés",
      successMsg: "Votre commande a été enregistrée avec succès ! Nous vous contacterons bientôt.",
      errors: {
        nameRequired: "Veuillez entrer votre nom complet.",
        phoneRequired: "Veuillez entrer votre numéro de téléphone.",
        phoneInvalid: "Le numéro doit contenir exactement 10 chiffres.",
        addressRequired: "Veuillez entrer votre ville ou adresse.",
        quantityRequired: "Veuillez entrer une quantité valide."
      },
      submitSuccess: "Votre commande a été enregistrée avec succès!",
      submitError: "Une erreur s'est produite, veuillez réessayer."
    }
  };

  let currentLang = "ar";
  const endTime = Date.now() + 4 * 24 * 60 * 60 * 1000;
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyyiF2paVNaWhTXoxoXKRNxtn0yC5u2lh6Y3FEhHbVLzr6DpJxrnCnIIO77mstcD4DAkA/exec";

  const langToggle = document.getElementById("langToggle");
  const form = document.getElementById("orderForm");
  const orderNowSticky = document.getElementById("orderNowSticky");
  const orderNowBottom = document.getElementById("orderNowBottom");
  const orderSection = document.getElementById("orderSection");

  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const addressInput = document.getElementById("address");
  const quantityInput = document.getElementById("quantity");
  const totalPriceEl = document.getElementById("totalPrice");

  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");
  const addressError = document.getElementById("addressError");
  const quantityError = document.getElementById("quantityError");
  const orderSuccessBox = document.getElementById("orderSuccessBox");

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  const i18nElements = document.querySelectorAll("[data-i18n]");

  function setLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];

    document.documentElement.lang = lang === "ar" ? "ar" : "fr";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = dict.pageTitle;

    i18nElements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    langToggle.textContent = lang === "ar" ? "Français" : "العربية";
    if (orderSuccessBox && orderSuccessBox.classList.contains("show")) {
      orderSuccessBox.textContent = dict.successMsg;
    }
    clearErrors();
    updateTotalPrice();
  }

  function updateTotalPrice() {
    const qty = Math.max(1, parseInt(quantityInput?.value || "1", 10) || 1);
    if (quantityInput) quantityInput.value = qty;
    if (totalPriceEl) totalPriceEl.textContent = `${qty * 149} DH`;
  }

  function clearErrors() {
    nameError.textContent = "";
    phoneError.textContent = "";
    addressError.textContent = "";
    if (quantityError) quantityError.textContent = "";
  }

  function hideSuccessMessage() {
    if (orderSuccessBox) {
      orderSuccessBox.textContent = "";
      orderSuccessBox.classList.remove("show");
    }
  }

  function showSuccessMessage(message) {
    if (orderSuccessBox) {
      orderSuccessBox.textContent = message || translations[currentLang].successMsg;
      orderSuccessBox.classList.add("show");
    }
  }

  function validateForm() {
    const dict = translations[currentLang];
    clearErrors();
    let isValid = true;

    const nameVal = nameInput.value.trim();
    const phoneVal = phoneInput.value.trim();
    const addressVal = addressInput.value.trim();
    const quantityVal = parseInt(quantityInput?.value || "0", 10);

    if (!nameVal) {
      nameError.textContent = dict.errors.nameRequired;
      isValid = false;
    }

    if (!phoneVal) {
      phoneError.textContent = dict.errors.phoneRequired;
      isValid = false;
    } else if (!/^\d{10}$/.test(phoneVal)) {
      phoneError.textContent = dict.errors.phoneInvalid;
      isValid = false;
    }

    if (!addressVal) {
      addressError.textContent = dict.errors.addressRequired;
      isValid = false;
    }

    if (!quantityVal || quantityVal < 1) {
      if (quantityError) quantityError.textContent = dict.errors.quantityRequired;
      isValid = false;
    }

    return isValid;
  }

  function updateCountdown() {
    const now = Date.now();
    const diff = endTime - now;

    if (diff <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const d = Math.floor(totalSeconds / (24 * 3600));
    const h = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    daysEl.textContent = String(d).padStart(2, "0");
    hoursEl.textContent = String(h).padStart(2, "0");
    minutesEl.textContent = String(m).padStart(2, "0");
    secondsEl.textContent = String(s).padStart(2, "0");
  }

  function scrollToOrder() {
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  async function submitToGoogleScript(formData) {
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        const response = await fetch(GOOGLE_SCRIPT_URL, {
  method: "POST",
  body: new URLSearchParams(formData)
});
        body: JSON.stringify(formData)
      });
      
      // With no-cors mode, we can't read the response
      // So we assume it was successful
      return { success: true };
      
    } catch (err) {
      console.error("Submission error:", err);
      return { success: false, error: err };
    }
  }

  // Main form submission handler
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    hideSuccessMessage();
    
    // Validate form first
    if (!validateForm()) {
      return;
    }

    // Prepare form data
    const formData = {
      name: nameInput.value.trim(),
      phone: phoneInput.value.trim(),
      address: addressInput.value.trim(),
      quantity: quantityInput.value.trim(),
      language: currentLang,
      timestamp: new Date().toISOString()
    };

    // Show loading state (optional)
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = currentLang === "ar" ? "جاري الإرسال..." : "Envoi en cours...";
    submitButton.disabled = true;

    try {
      // Submit to Google Script
      const result = await submitToGoogleScript(formData);
      
      if (result.success) {
        // Show success message
        showSuccessMessage(translations[currentLang].submitSuccess);
        
        // Reset form
        form.reset();
        clearErrors();
        updateTotalPrice();
        
        // Optional: Show additional alert (can be removed if you prefer only the success box)
        // alert(translations[currentLang].submitSuccess);
      } else {
        // Show error message
        alert(translations[currentLang].submitError);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(translations[currentLang].submitError);
    } finally {
      // Restore button state
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
    }
  });

  langToggle.addEventListener("click", () => {
    setLanguage(currentLang === "ar" ? "fr" : "ar");
  });

  [orderNowSticky, orderNowBottom].forEach((btn) => {
    if (btn) {
      btn.addEventListener("click", scrollToOrder);
    }
  });

  phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/[^\d]/g, "").slice(0, 10);
  });

  if (quantityInput) {
    quantityInput.addEventListener("input", updateTotalPrice);
    quantityInput.addEventListener("change", updateTotalPrice);
  }

  // Initialize
  setLanguage("ar");
  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
