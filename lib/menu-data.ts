import { MENU_IMAGES } from "./image-config"

export const menuData = {
  // 🍱 THALIS
  thalis: [
    { id: "veg-thali", name: "Veg Thali", price: "₹80", description: "Rice, 2 Chapati, 2 Sabji, Dal, Salad", image: MENU_IMAGES.thali.maharashtrianThali, isVeg: true, isPopular: true },
    { id: "special-veg-thali", name: "Special Veg Thali", price: "₹130", description: "Rice, 3 Chapati, 2 Sabji (Paneer/Mix Veg), Dal, Papad, Dahi, Salad, Gulab Jamun", image: MENU_IMAGES.thali.jainThali, isVeg: true, isPopular: true },
    { id: "non-veg-thali", name: "Non-Veg Thali", price: "₹150", description: "Rice, 3 Chapati, Chicken Gravy", image: MENU_IMAGES.nonVeg.chickenCurry, isVeg: false },
    { id: "special-non-veg-thali", name: "Special Non-Veg Thali", price: "₹200", description: "Rice, 3 Chapati, 2 Chicken Dish (Gravy/Dry), Papad, Salad, Gulab Jamun", image: MENU_IMAGES.nonVeg.chickenCurry, isVeg: false, isPopular: true },
  ],

  // 🟢 STARTERS & SNACKS
  starters: [
    // Veg Starters & Snacks
    { id: "samosa", name: "Samosa", price: "₹15", image: MENU_IMAGES.maharashtrianBreakfast.vadaPav, isVeg: true },
    { id: "vada-pav", name: "Vada Pav", price: "₹20", image: MENU_IMAGES.maharashtrianBreakfast.vadaPav, isVeg: true, isPopular: true },
    { id: "kanda-bhaji", name: "Kanda Bhaji", price: "₹50", image: MENU_IMAGES.maharashtrianBreakfast.kothimbirVadi, isVeg: true },
    { id: "onion-pakoda", name: "Onion Pakoda", price: "₹80", image: MENU_IMAGES.maharashtrianBreakfast.kothimbirVadi, isVeg: true },
    { id: "paneer-pakoda", name: "Paneer Pakoda", price: "₹90", image: MENU_IMAGES.maharashtrianBreakfast.kothimbirVadi, isVeg: true },
    { id: "cheese-pakoda", name: "Cheese Pakoda", price: "₹100", image: MENU_IMAGES.maharashtrianBreakfast.kothimbirVadi, isVeg: true },
    { id: "fry-papad", name: "Fry Papad", price: "₹20", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },
    { id: "masala-papad", name: "Masala Papad", price: "₹30", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },

    // South Indian
    { id: "idli-sambar", name: "Idli Sambar", price: "₹50", image: MENU_IMAGES.southIndian.idliSambar, isVeg: true },
    { id: "medu-vada-sambar", name: "Medu Vada Sambar", price: "₹60", image: MENU_IMAGES.southIndian.meduVada, isVeg: true },
    { id: "batata-vada-sambar", name: "Batata Vada Sambar", price: "₹70", image: MENU_IMAGES.southIndian.batataVada, isVeg: true },
    { id: "plain-dosa", name: "Plain Dosa", price: "₹60", image: MENU_IMAGES.southIndian.plainDosa, isVeg: true },
    { id: "masala-dosa", name: "Masala Dosa", price: "₹80", image: MENU_IMAGES.southIndian.masalaDosa, isVeg: true, isPopular: true },
    { id: "butter-dosa", name: "Butter Dosa", price: "₹100", image: MENU_IMAGES.southIndian.masalaDosa, isVeg: true },
    { id: "mysore-masala-dosa", name: "Mysore Masala Dosa", price: "₹120", image: MENU_IMAGES.southIndian.mysorePlainDosa, isVeg: true },
    { id: "mysore-cheese-dosa", name: "Mysore Cheese Dosa", price: "₹140", image: MENU_IMAGES.southIndian.mysorePlainDosa, isVeg: true },
    { id: "onion-uttappa", name: "Onion Uttappa", price: "₹90", image: MENU_IMAGES.southIndian.plainDosa, isVeg: true },
    { id: "tomato-onion-uttappa", name: "Tomato Onion Uttappa", price: "₹100", image: MENU_IMAGES.southIndian.plainDosa, isVeg: true },
    { id: "cheese-uttappa", name: "Cheese Uttappa", price: "₹130", image: MENU_IMAGES.southIndian.plainDosa, isVeg: true },

  ],

  // 🥘 MAIN COURSE (VEG & PANEER)
  vegMain: [
    // Paneer Specials
    { id: "paneer-butter-masala", name: "Paneer Butter Masala (Sweet)", price: "₹120", image: MENU_IMAGES.mainCourse.paneerButterMasala, isVeg: true, isPopular: true },
    { id: "paneer-kadhai", name: "Paneer Kadhai", price: "₹120", image: MENU_IMAGES.mainCourse.paneerButterMasala, isVeg: true },
    { id: "paneer-tikka-masala", name: "Paneer Tikka Masala", price: "₹150", image: MENU_IMAGES.mainCourse.paneerButterMasala, isVeg: true, isPopular: true },
    { id: "paneer-bhurji", name: "Paneer Bhurji", price: "₹120", image: MENU_IMAGES.mainCourse.paneerButterMasala, isVeg: true },
    { id: "paneer-handi", name: "Paneer Handi (Half/Full)", price: "₹160 / ₹250", image: MENU_IMAGES.mainCourse.paneerButterMasala, isVeg: true },
    { id: "paneer-kolhapuri", name: "Paneer Kolhapuri", price: "₹120", image: MENU_IMAGES.mainCourse.paneerButterMasala, isVeg: true },
    { id: "palak-paneer", name: "Palak Paneer", price: "₹120", image: MENU_IMAGES.mainCourse.palakPaneer, isVeg: true },
    { id: "paneer-mutter-masala", name: "Paneer Mutter Masala", price: "₹120", image: MENU_IMAGES.mainCourse.paneerButterMasala, isVeg: true },
    { id: "paneer-makhanwala", name: "Paneer Makhanwala (Sweet)", price: "₹120", image: MENU_IMAGES.mainCourse.paneerButterMasala, isVeg: true },

    // Veg Main Course
    { id: "veg-65-main", name: "Veg 65", price: "₹120", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },
    { id: "veg-kadai", name: "Veg Kadai", price: "₹130", image: MENU_IMAGES.mainCourse.vegKadhai, isVeg: true },
    { id: "veg-marathi", name: "Veg Marathi", price: "₹130", image: MENU_IMAGES.mainCourse.vegKolhapuri, isVeg: true },
    { id: "veg-jaipuri", name: "Veg Jaipuri", price: "₹120", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },
    { id: "veg-kolhapuri", name: "Veg Kolhapuri", price: "₹120", image: MENU_IMAGES.mainCourse.vegKolhapuri, isVeg: true },
    { id: "veg-handi", name: "Veg Handi (Half/Full)", price: "₹150 / ₹220", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },
    { id: "veg-handi-special", name: "Veg Handi Special", price: "₹180", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },
    { id: "dum-aloo-punjabi", name: "Dum Aloo Punjabi", price: "₹100", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },
    { id: "mix-veg", name: "Mix Veg", price: "₹80", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },
    { id: "soyabin-masala", name: "Soyabin Masala", price: "₹80", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },
    { id: "aloo-gobi", name: "Aloo Gobi", price: "₹80", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },
    { id: "aloo-mutter", name: "Aloo Mutter", price: "₹80", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },
    { id: "green-peas-masala", name: "Green Peas Masala", price: "₹80", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },
    { id: "sev-bhaji", name: "Sev Bhaji", price: "₹80", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },
    { id: "plain-palak", name: "Plain Palak", price: "₹80", image: MENU_IMAGES.mainCourse.palakPaneer, isVeg: true },
    { id: "palak-lasuni", name: "Palak Lasuni", price: "₹80", image: MENU_IMAGES.mainCourse.palakPaneer, isVeg: true },
    { id: "dal-fry", name: "Dal Fry", price: "₹70", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },
    { id: "dal-tadka", name: "Dal Tadka", price: "₹80", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },
    { id: "dal-butter-fry", name: "Dal Butter Fry", price: "₹80", image: MENU_IMAGES.mainCourse.mixVeg, isVeg: true },
  ],

  // 🍗 NON-VEG MAIN COURSE
  nonVegMain: [
    { id: "chicken-curry", name: "Chicken Curry", price: "₹130", image: MENU_IMAGES.nonVeg.chickenCurry, isVeg: false },
    { id: "chicken-masala", name: "Chicken Masala", price: "₹150", image: MENU_IMAGES.nonVeg.chickenCurry, isVeg: false, isPopular: true },
    { id: "chicken-kadhai", name: "Chicken Kadhai", price: "₹160", image: MENU_IMAGES.nonVeg.chickenCurry, isVeg: false },
    { id: "chicken-kolhapuri", name: "Chicken Kolhapuri", price: "₹160", image: MENU_IMAGES.nonVeg.chickenCurry, isVeg: false },
    { id: "chicken-handi", name: "Chicken Handi (Half/Full)", price: "₹180 / ₹260", image: MENU_IMAGES.nonVeg.chickenCurry, isVeg: false, isPopular: true },
    { id: "butter-chicken", name: "Butter Chicken", price: "₹170", image: MENU_IMAGES.nonVeg.chickenCurry, isVeg: false },
    { id: "chicken-hyderabadi", name: "Chicken Hyderabadi", price: "₹160", image: MENU_IMAGES.nonVeg.chickenCurry, isVeg: false },
    { id: "chicken-do-pyaza", name: "Chicken Do Pyaza", price: "₹180", image: MENU_IMAGES.nonVeg.chickenCurry, isVeg: false },
  ],

  // 🥢 CHINESE CORNER
  chinese: [
    // Veg Chinese
    { id: "veg-manchurian", name: "Veg Manchurian (Dry/Gravy)", price: "₹100 / ₹110", image: MENU_IMAGES.chineseStarters.vegManchurianDry, isVeg: true },
    { id: "veg-crispy", name: "Veg Crispy", price: "₹120", image: MENU_IMAGES.chineseStarters.vegManchurianDry, isVeg: true },
    { id: "paneer-chilli", name: "Paneer Chilli (Dry/Gravy)", price: "₹140 / ₹150", image: MENU_IMAGES.chineseStarters.paneerChilliDry, isVeg: true },
    { id: "paneer-manchurian", name: "Paneer Manchurian", price: "₹140", image: MENU_IMAGES.chineseStarters.vegManchurianDry, isVeg: true },
    { id: "paneer-crispy", name: "Paneer Crispy", price: "₹150", image: MENU_IMAGES.chineseStarters.vegManchurianDry, isVeg: true },
    { id: "veg-hakka-noodles", name: "Veg Hakka Noodles", price: "₹90 / ₹140", image: MENU_IMAGES.chinese.vegHakkaNoodles, isVeg: true },
    { id: "veg-schezwan-noodles", name: "Veg Schezwan Noodles", price: "₹100 / ₹150", image: MENU_IMAGES.chinese.vegSchezwanNoodles, isVeg: true },
    { id: "veg-fried-rice-chinese", name: "Veg Fried Rice", price: "₹90 / ₹140", image: MENU_IMAGES.chinese.vegFriedRice, isVeg: true },
    { id: "veg-schezwan-rice", name: "Veg Schezwan Rice", price: "₹100 / ₹150", image: MENU_IMAGES.chinese.vegSchezwanFriedRice, isVeg: true },
    { id: "veg-triple-rice", name: "Veg Triple Rice", price: "₹130 / ₹180", image: MENU_IMAGES.chinese.vegFriedRice, isVeg: true },

    // Non-Veg Chinese Starters
    { id: "chicken-manchurian-starter", name: "Chicken Manchurian (Dry/Gravy)", price: "₹90 / ₹180", image: MENU_IMAGES.chineseStarters.vegManchurianDry, isVeg: false },
    { id: "chicken-chilli-starter", name: "Chicken Chilli (Dry/Gravy)", price: "₹90 / ₹180", image: MENU_IMAGES.chineseStarters.paneerChilliDry, isVeg: false },
    { id: "chicken-65-chinese", name: "Chicken 65", price: "₹90 / ₹180", image: MENU_IMAGES.chineseStarters.paneer65, isVeg: false, isPopular: true },

    // Non-Veg Chinese Rice
    { id: "chicken-fried-rice", name: "Chicken Fried Rice", price: "₹80 / ₹130", image: MENU_IMAGES.chinese.vegFriedRice, isVeg: false },
    { id: "chicken-schezwan-rice", name: "Chicken Schezwan Rice", price: "₹90 / ₹140", image: MENU_IMAGES.chinese.vegSchezwanFriedRice, isVeg: false },
    { id: "chicken-chilli-garlic-rice", name: "Chicken Chilli Garlic Rice", price: "₹90 / ₹150", image: MENU_IMAGES.chinese.vegFriedRice, isVeg: false },
    { id: "chicken-triple-rice", name: "Chicken Triple Rice", price: "₹130 / ₹180", image: MENU_IMAGES.chinese.vegFriedRice, isVeg: false },
    { id: "chicken-burnt-garlic-rice", name: "Chicken Burnt Garlic Rice", price: "₹130 / ₹180", image: MENU_IMAGES.chinese.vegFriedRice, isVeg: false },

    // Non-Veg Chinese Noodles
    { id: "chicken-hakka-noodles", name: "Chicken Hakka Noodles", price: "₹80 / ₹130", image: MENU_IMAGES.chinese.vegHakkaNoodles, isVeg: false },
    { id: "chicken-schezwan-noodles", name: "Chicken Schezwan Noodles", price: "₹90 / ₹140", image: MENU_IMAGES.chinese.vegSchezwanNoodles, isVeg: false },
    { id: "chicken-chilli-garlic-noodles", name: "Chicken Chilli Garlic Noodles", price: "₹90 / ₹150", image: MENU_IMAGES.chinese.vegHakkaNoodles, isVeg: false },
    { id: "chicken-triple-noodles", name: "Chicken Triple Noodles", price: "₹130 / ₹180", image: MENU_IMAGES.chinese.vegHakkaNoodles, isVeg: false },
    { id: "chicken-burnt-garlic-noodles", name: "Chicken Burnt Garlic Noodles", price: "₹130 / ₹180", image: MENU_IMAGES.chinese.vegHakkaNoodles, isVeg: false },
  ],

  // 🍚 RICE & BIRYANI
  riceBiryani: [
    { id: "plain-rice", name: "Plain Rice (Half/Full)", price: "₹50 / ₹60", image: MENU_IMAGES.rice.jeeraRice, isVeg: true },
    { id: "jeera-rice", name: "Jeera Rice (Half/Full)", price: "₹60 / ₹70", image: MENU_IMAGES.rice.jeeraRice, isVeg: true },
    { id: "masala-rice", name: "Masala Rice", price: "₹80", image: MENU_IMAGES.rice.vegPulao, isVeg: true },
    { id: "veg-fried-rice", name: "Veg Fried Rice", price: "₹100", image: MENU_IMAGES.rice.vegPulao, isVeg: true },
    { id: "mushroom-fried-rice", name: "Mushroom Fried Rice", price: "₹100", image: MENU_IMAGES.rice.vegPulao, isVeg: true },
    { id: "veg-pulav", name: "Veg Pulav", price: "₹80", image: MENU_IMAGES.rice.vegPulao, isVeg: true },
    { id: "paneer-pulav", name: "Paneer Pulav", price: "₹80", image: MENU_IMAGES.rice.vegPulao, isVeg: true },
    { id: "dal-khichadi", name: "Dal Khichadi", price: "₹70", image: MENU_IMAGES.rice.curdRice, isVeg: true },
    { id: "dal-khichadi-tadka", name: "Dal Khichadi Tadka", price: "₹80", image: MENU_IMAGES.rice.curdRice, isVeg: true },

    // Biryani
    { id: "veg-biryani", name: "Veg Biryani", price: "₹80", image: MENU_IMAGES.rice.vegBiryani, isVeg: true },
    { id: "soyabin-biryani", name: "Soyabin Biryani", price: "₹80", image: MENU_IMAGES.rice.vegBiryani, isVeg: true },
    { id: "paneer-biryani", name: "Paneer Biryani", price: "₹110", image: MENU_IMAGES.biryani.paneerBiryani, isVeg: true, isPopular: true },
    { id: "egg-biryani", name: "Egg Biryani", price: "₹110", image: MENU_IMAGES.rice.vegBiryani, isVeg: false },
    { id: "chicken-biryani", name: "Chicken Biryani", price: "₹150", image: MENU_IMAGES.biryani.chickenBiryani, isVeg: false, isPopular: true },
  ],

  // 🫓 ROTI / BREADS
  breads: [
    { id: "roti", name: "Roti", price: "₹12", image: MENU_IMAGES.breads.chapati, isVeg: true },
    { id: "butter-roti", name: "Butter Roti", price: "₹15", image: MENU_IMAGES.breads.chapati, isVeg: true },
    { id: "paratha", name: "Paratha", price: "₹18", image: MENU_IMAGES.breads.chapati, isVeg: true },
    { id: "jwari-bhakri", name: "Jwari Bhakri", price: "₹40", image: MENU_IMAGES.breads.chapati, isVeg: true },
    { id: "bajri-bhakri", name: "Bajri Bhakri", price: "₹40", image: MENU_IMAGES.breads.chapati, isVeg: true },
  ],

  // 🥤 BEVERAGES & SWEETS
  beveragesSweets: [
    // Beverages
    { id: "tea", name: "Tea", price: "₹10", image: MENU_IMAGES.hotDrinks.tea, isVeg: true },
    { id: "hot-coffee", name: "Hot Coffee", price: "₹20", image: MENU_IMAGES.hotDrinks.filterCoffee, isVeg: true },
    { id: "cold-drinks", name: "Cold Drinks", price: "MRP", image: MENU_IMAGES.hotDrinks.tea, isVeg: true },

    // Sweets
    { id: "gulab-jamun", name: "Gulab Jamun", price: "₹40", image: MENU_IMAGES.desserts.gulabJamun, isVeg: true },
    { id: "rasgulla", name: "Rasgulla", price: "₹40", image: MENU_IMAGES.desserts.gulabJamun, isVeg: true },
    { id: "gajar-halwa", name: "Gajar Halwa", price: "₹60", image: MENU_IMAGES.desserts.gulabJamun, isVeg: true },
    { id: "shrikhand", name: "Shrikhand", price: "₹60", image: MENU_IMAGES.desserts.gulabJamun, isVeg: true },
    { id: "amrakhand", name: "Amrakhand", price: "₹70", image: MENU_IMAGES.desserts.gulabJamun, isVeg: true },
    { id: "kheer", name: "Kheer", price: "₹50", image: MENU_IMAGES.desserts.gulabJamun, isVeg: true },
    { id: "ice-cream", name: "Ice Cream (Vanilla/Strawberry/Chocolate)", price: "₹40", image: MENU_IMAGES.desserts.iceVanilla, isVeg: true },
  ],
}
