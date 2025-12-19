"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Menu,
  Users,
  Heart,
  Utensils,
  Crown,
  Sparkles,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import MenuCategory from "@/components/menu-category"
import TestimonialCard from "@/components/testimonial-card"
import LocationMap from "@/components/location-map"
import { menuData } from "@/lib/menu-data"
import LoadingAnimation from "@/components/loading-animation"
import SpecialOffers from "@/components/special-offers"
import AnimatedDish from "@/components/animated-dish"
import ScrollToTop from "@/components/scroll-to-top"
import ModernSectionHeader from "@/components/modern-section-header"
import EnhancedCard from "@/components/enhanced-card"
import AnimatedCounter from "@/components/animated-counter"
import { motion, useScroll, useTransform } from "framer-motion"
import FoodDeliveryButtons from "@/components/food-delivery-buttons"
import { useTranslation } from "@/hooks/use-translation"
import LanguageSwitcher from "@/components/language-switcher"
import AnimatedText from "@/components/animated-text"
import FloatingElements from "@/components/floating-elements"
import EnhancedButton from "@/components/enhanced-button"
import FAQSection from "@/components/faq-section"
import { BRANDING_IMAGES, HERO_IMAGES, FEATURED_DISHES, GALLERY_IMAGES } from "@/lib/image-config"
import SeparateUtensilsSection from "@/components/separate-utensils-section"
import FreeDeliverySection from "@/components/free-delivery-section"

export default function Home() {
  const { t, language } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -100])
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, -200])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const navItems = [
    { name: "about", href: "#about" },
    { name: "offers", href: "#offers" },
    { name: "menu", href: "#menu" },
    { name: "location", href: "#location" },
    { name: "contact", href: "#contact" },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <LoadingAnimation />
      {isLoaded && null}

      {/* Enhanced Header with Animations */}
      <motion.header
        style={{ y: headerY }}
        className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Link href="/" className="flex items-center gap-3 group">
                <motion.div className="relative h-12 w-12" whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
                  <Image
                    src={BRANDING_IMAGES.logo || "/placeholder.svg"}
                    alt="Suruchi's Kitchen Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </motion.div>
                <div>
                  <h1 className="text-lg font-bold text-gray-800">{t("hero.hotelName")}</h1>
                  <p className="text-xs text-blue-600">{t("hero.tagline")}</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation with Stagger Animation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-gray-700 hover:text-blue-700 transition-colors duration-300 text-sm font-medium group"
                  >
                    {t(`nav.${item.name}`)}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <LanguageSwitcher />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <EnhancedButton
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full px-4 py-2 text-sm"
                  onClick={() => (window.location.href = "tel:7417007124")}
                >
                  <Phone className="mr-2 h-3 w-3" /> {t("nav.callNow")}
                </EnhancedButton>
              </motion.div>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col space-y-4 mt-8">
                  <LanguageSwitcher />
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-gray-700 hover:text-blue-700 transition-colors duration-300 text-lg font-medium"
                      >
                        {t(`nav.${item.name}`)}
                      </Link>
                    </motion.div>
                  ))}
                  <EnhancedButton
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full mt-4"
                    onClick={() => (window.location.href = "tel:7417007124")}
                  >
                    <Phone className="mr-2 h-4 w-4" /> {t("nav.callNow")}
                  </EnhancedButton>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/30 to-indigo-50/30 pt-16">
        <FloatingElements count={8} />

        <motion.div className="absolute inset-0 z-0" style={{ y: heroParallax }}>
          <Image
            src={HERO_IMAGES.heroBackground || "/placeholder.svg"}
            alt="Restaurant Ambiance"
            fill
            className="object-cover opacity-20"
            priority
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 z-10 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div className="relative inline-block" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative w-24 h-24 mx-auto">
                  <Image
                    src={BRANDING_IMAGES.logo || "/placeholder.svg"}
                    alt="Suruchi's Kitchen Logo"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>

            <AnimatedText variant="scale" delay={0.2}>
              <h1 className="text-4xl md:text-7xl font-bold mb-4 text-gray-800">{t("hero.hotelName")}</h1>
            </AnimatedText>

            <AnimatedText variant="fadeUp" delay={0.4}>
              <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-blue-600">{t("hero.tagline")}</h2>
            </AnimatedText>

            <motion.div variants={itemVariants} className="mb-8" transition={{ delay: 0.6 }}>
              <AnimatedText variant="fadeIn" delay={0.8}>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("hero.description")}</p>
              </AnimatedText>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              transition={{ delay: 1.0 }}
            >
              <EnhancedButton
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white text-lg py-6 px-8 rounded-full shadow-lg"
              >
                {t("hero.exploreMenu")}
              </EnhancedButton>
              <EnhancedButton
                variant="outline"
                size="lg"
                className="border-2 border-blue-500 text-blue-700 hover:bg-blue-50 text-lg py-6 px-8 rounded-full"
              >
                {t("hero.visitUs")}
              </EnhancedButton>
            </motion.div>

            <motion.div variants={itemVariants} transition={{ delay: 1.2 }}>
              <a
                href="tel:7417007124"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="text-lg font-semibold">{t("hero.callUs")}</span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link href="#stats">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              <ChevronDown className="h-8 w-8" />
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <section id="stats" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Users, count: 2000, suffix: "+", label: t("stats.happyCustomers") },
              { icon: Heart, count: 100, suffix: "%", label: t("stats.bothVegNonVeg") },
              { icon: Utensils, count: 150, suffix: "+", label: t("stats.authenticDishes") },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4 shadow-lg"
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>
                <AnimatedCounter end={stat.count} suffix={stat.suffix} />
                <AnimatedText variant="fadeUp" delay={index * 0.1}>
                  <p className="text-gray-600 mt-2">{stat.label}</p>
                </AnimatedText>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ModernSectionHeader
              title={t("about.title")}
              subtitle={t("about.subtitle")}
              description={t("about.description")}
              icon={<Crown className="h-8 w-8 text-white" />}
            />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <EnhancedCard delay={0.2}>
                <motion.div
                  className="relative h-96 overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={HERO_IMAGES.restaurantInterior || "/placeholder.svg"}
                    alt="Restaurant Interior"
                    fill
                    className="object-cover"
                  />
                  <motion.div
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Badge className="bg-blue-500 text-white">
                      <Sparkles className="h-4 w-4 mr-1" />
                      {t("common.blessedByTradition")}
                    </Badge>
                  </motion.div>
                </motion.div>
              </EnhancedCard>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="prose prose-lg">
                  <AnimatedText variant="fadeUp" delay={0.1}>
                    <p className="text-gray-700 leading-relaxed">{t("about.paragraph1")}</p>
                  </AnimatedText>
                  <AnimatedText variant="fadeUp" delay={0.2}>
                    <p className="text-gray-700 leading-relaxed">{t("about.paragraph2")}</p>
                  </AnimatedText>
                  <AnimatedText variant="fadeUp" delay={0.3}>
                    <p className="text-gray-700 leading-relaxed">{t("about.paragraph3")}</p>
                  </AnimatedText>
                </div>

                <motion.div
                  className="grid grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    variants={itemVariants}
                    className="p-4 bg-blue-50 rounded-lg border border-blue-100"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-bold text-gray-800 mb-2">{t("about.pureVegTitle")}</h4>
                    <p className="text-sm text-gray-600">{t("about.pureVegDesc")}</p>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="p-4 bg-indigo-50 rounded-lg border border-indigo-100"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-bold text-gray-800 mb-2">{t("about.traditionalTitle")}</h4>
                    <p className="text-sm text-gray-600">{t("about.traditionalDesc")}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <SeparateUtensilsSection />

      {/* Featured Dishes */}
      <section className="py-20 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ModernSectionHeader
              title={t("featured.title")}
              subtitle={t("featured.subtitle")}
              description={t("featured.description")}
              icon={<Utensils className="h-8 w-8 text-white" />}
            />

            <motion.div
              className="grid grid-cols-2 md:grid-cols-5 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { name: "Misal Pav", image: FEATURED_DISHES.misalPav },
                { name: "Puran Poli", image: FEATURED_DISHES.puranPoli },
                { name: "Vada Pav", image: FEATURED_DISHES.vadaPav },
                { name: "Modak", image: FEATURED_DISHES.modak },
                { name: "Masala Dosa", image: FEATURED_DISHES.masalaDosa },
              ].map((dish, index) => (
                <motion.div
                  key={dish.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatedDish name={dish.name} image={dish.image} delay={index * 0.1} className="group" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <FreeDeliverySection />

      {/* Unlimited Pav Bhaji Special Offer */}
      <section className="py-20 bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Glow effect container */}
              <div className="relative inline-block">
                <motion.div
                  className="absolute -inset-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-2xl opacity-60"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="relative bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 p-12 rounded-3xl shadow-2xl border-4 border-yellow-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="text-6xl mb-4"
                  >
                    🍛
                  </motion.div>

                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">UNLIMITED</h2>
                  <h3 className="text-3xl md:text-5xl font-bold text-yellow-100 mb-6 drop-shadow-lg">PAV BHAJI</h3>

                  <motion.div
                    className="text-5xl md:text-7xl font-black text-white mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    ₹149 ONLY
                  </motion.div>

                  <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Indulge in our signature unlimited pav bhaji experience with fresh hot pav and authentic
                    Mumbai-style bhaji
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {["Unlimited Servings", "Fresh Hot Pav", "Authentic Recipe", "Premium Ingredients"].map(
                      (feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30"
                        >
                          <div className="text-2xl mb-2">✨</div>
                          <p className="text-white font-semibold text-sm">{feature}</p>
                        </motion.div>
                      ),
                    )}
                  </div>

                  <motion.button
                    className="bg-white text-orange-600 font-bold text-xl px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Order Now!
                  </motion.button>

                  <p className="text-yellow-200 text-sm mt-4">Available All Day • *Terms and conditions apply</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="offers" className="bg-white">
        <SpecialOffers />
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ModernSectionHeader
              title={t("location.title")}
              subtitle={t("location.subtitle")}
              description={t("location.description")}
              icon={<MapPin className="h-8 w-8 text-white" />}
            />

            <div className="grid lg:grid-cols-2 gap-12 mt-12">
              <EnhancedCard delay={0.2}>
                <div className="h-96">
                  <LocationMap />
                </div>
              </EnhancedCard>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-800">
                    <MapPin className="h-6 w-6 text-blue-500" />
                    {t("location.addressTitle")}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {t("location.addressLine1")}
                    <br />
                    {t("location.addressLine2")}
                    <br />
                    {t("location.addressLine3")}
                    <br />
                    {t("location.addressLine4")}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-800">
                    <Phone className="h-6 w-6 text-blue-500" />
                    {t("location.contactTitle")}
                  </h3>
                  <a href="tel:7417007124" className="text-blue-600 hover:text-blue-700 text-lg font-semibold">
                    7417007124
                  </a>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-800">
                    <Clock className="h-6 w-6 text-blue-500" />
                    {t("location.hoursTitle")}
                  </h3>
                  <p className="text-gray-600 text-lg">{t("location.hours")}</p>
                </div>

                <FoodDeliveryButtons />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <ModernSectionHeader
              title={t("menu.title")}
              subtitle={t("menu.subtitle")}
              description={t("menu.description")}
              icon={<Utensils className="h-8 w-8 text-white" />}
            />

            <Tabs defaultValue="maharashtrian" className="mt-12">
              <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-transparent">
                <TabsTrigger value="maharashtrian">{t("menu.maharashtrian")}</TabsTrigger>
                <TabsTrigger value="mainCourse">{t("menu.mainCourse")}</TabsTrigger>
                <TabsTrigger value="nonVeg" className="bg-orange-100 text-orange-800">
                  {t("menu.nonVeg")} 🍗
                </TabsTrigger>
                <TabsTrigger value="biryani">{t("menu.biryani")}</TabsTrigger>
                <TabsTrigger value="thali">{t("menu.thali")}</TabsTrigger>
                <TabsTrigger value="pavBhaji">{t("menu.pavBhaji")}</TabsTrigger>
                <TabsTrigger value="southIndian">{t("menu.southIndian")}</TabsTrigger>
                <TabsTrigger value="beverages">{t("menu.beverages")}</TabsTrigger>
              </TabsList>

              <TabsContent value="maharashtrian">
                <MenuCategory title={t("menu.maharashtrian")} items={menuData.maharashtrian} />
              </TabsContent>

              <TabsContent value="mainCourse">
                <MenuCategory title={t("menu.mainCourse")} items={menuData.mainCourse} />
              </TabsContent>

              <TabsContent value="nonVeg">
                <MenuCategory title={t("menu.nonVeg")} items={menuData.nonVeg} />
              </TabsContent>

              <TabsContent value="biryani">
                <MenuCategory title={t("menu.biryani")} items={menuData.biryani} />
              </TabsContent>

              <TabsContent value="thali">
                <MenuCategory title={t("menu.thali")} items={menuData.thali} />
              </TabsContent>

              <TabsContent value="pavBhaji">
                <MenuCategory title={t("menu.pavBhaji")} items={menuData.pavBhaji} />
              </TabsContent>

              <TabsContent value="southIndian">
                <MenuCategory title={t("menu.southIndian")} items={menuData.southIndian} />
              </TabsContent>

              <TabsContent value="beverages">
                <MenuCategory title={t("menu.beverages")} items={menuData.beverages} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ModernSectionHeader
              title={t("gallery.title")}
              subtitle={t("gallery.subtitle")}
              description={t("gallery.description")}
            />

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {GALLERY_IMAGES.map((image, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -1, 1, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <EnhancedCard delay={i * 0.1}>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Gallery image ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </EnhancedCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ModernSectionHeader
              title={t("testimonials.title")}
              subtitle={t("testimonials.subtitle")}
              description={t("testimonials.description")}
              icon={<Heart className="h-8 w-8 text-white" />}
            />

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  name: "Amit Deshmukh",
                  quote:
                    "The food is absolutely authentic and reminds me of home cooking. The separate veg and non-veg kitchens give us confidence about hygiene.",
                  rating: 5,
                },
                {
                  name: "Priya Joshi",
                  quote:
                    "Best misal pav in Dhanori! The chicken biryani is also amazing. Love that they have completely separate sections for veg and non-veg.",
                  rating: 5,
                },
                {
                  name: "Rajesh Kulkarni",
                  quote:
                    "Great variety of both veg and non-veg dishes. The free delivery under 2km is very convenient. Highly recommend their thalis!",
                  rating: 4,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ModernSectionHeader
              title={t("contact.title")}
              subtitle={t("contact.subtitle")}
              description={t("contact.description")}
            />

            <div className="grid lg:grid-cols-2 gap-12">
              <EnhancedCard delay={0.2}>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">{t("contact.sendMessage")}</h3>
                  <form className="space-y-6">
                    <motion.div
                      className="grid grid-cols-2 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                          {t("contact.name")}
                        </label>
                        <motion.input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          whileFocus={{ scale: 1.02 }}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                          {t("contact.phone")}
                        </label>
                        <motion.input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          whileFocus={{ scale: 1.02 }}
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                        {t("contact.email")}
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                        {t("contact.message")}
                      </label>
                      <motion.textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <EnhancedButton className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-3 rounded-lg text-lg">
                        {t("contact.sendButton")}
                      </EnhancedButton>
                    </motion.div>
                  </form>
                </div>
              </EnhancedCard>

              <EnhancedCard delay={0.4}>
                <div className="p-8 bg-gradient-to-br from-gray-800 to-blue-800 text-white h-full">
                  <h3 className="text-2xl font-bold mb-8 text-blue-200">{t("contact.quickContact")}</h3>

                  <div className="space-y-6 mb-8">
                    <motion.div
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <motion.div
                        className="p-3 bg-blue-500 rounded-full flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Phone className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-blue-200 mb-1">Phone</h4>
                        <p className="text-white text-sm">
                          7417007124
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.div
                        className="p-3 bg-blue-500 rounded-full flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <MapPin className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-blue-200 mb-1">Address</h4>
                        <p className="text-white text-sm">
                          Shop No. E-54 Upper Ground, Kohinoor Vivacity, DN Parande Park Marg, Dhanori, Pune 411015
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.div
                        className="p-3 bg-blue-500 rounded-full flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Instagram className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-blue-200 mb-1">Instagram</h4>
                        <a
                          href="#"
                          className="text-white hover:text-blue-200 transition-colors text-sm"
                        >
                          Follow us on Instagram
                        </a>
                      </div>
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-blue-200 mb-3 flex items-center gap-2">
                        <Sparkles className="h-5 w-5" />
                        {t("contact.orderOnline")}
                      </h4>
                    </div>

                    <motion.div
                      className="p-4 bg-gray-800/50 rounded-lg border border-blue-500/30"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="font-bold text-blue-200 mb-2 flex items-center gap-2">
                        <Sparkles className="h-5 w-5" />
                        {t("contact.freeDelivery")}
                      </h4>
                      <p className="text-blue-300 text-sm">{t("contact.freeDeliveryDesc")}</p>
                    </motion.div>
                  </div>
                </div>
              </EnhancedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-blue-800 text-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Logo and Description */}
              <motion.div variants={itemVariants} className="md:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="relative w-12 h-12"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src={BRANDING_IMAGES.logo || "/placeholder.svg"}
                      alt="Suruchi's Kitchen Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Suruchi's Kitchen and Caterings</h3>
                  </div>
                </div>
                <p className="text-sm mb-4 leading-relaxed">{t("footer.description")}</p>
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <a
                      href="#"
                      className="text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants} className="md:col-span-1">
                <h4 className="font-bold mb-6 text-white text-lg">{t("footer.quickLinks")}</h4>
                <ul className="space-y-3">
                  {[
                    { key: "home", href: "#" },
                    { key: "aboutUs", href: "#about" },
                    { key: "specialOffers", href: "#offers" },
                    { key: "menu", href: "#menu" },
                    { key: "location", href: "#location" },
                    { key: "contact", href: "#contact" },
                  ].map((item, index) => (
                    <motion.li
                      key={item.key}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        href={item.href}
                        className="hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm"
                      >
                        <motion.span
                          className="w-1 h-1 bg-blue-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                        />
                        {t(`footer.${item.key}`)}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Opening Hours */}
              <motion.div variants={itemVariants} className="md:col-span-1">
                <h4 className="font-bold mb-6 text-white text-lg">{t("footer.openingHours")}</h4>
                <div className="space-y-3">
                  <motion.div
                    className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm">{t("footer.mondayFriday")}</span>
                    <span className="text-sm font-medium text-blue-300">7:00 AM - 11:00 PM</span>
                  </motion.div>
                  <motion.div
                    className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm">{t("footer.saturdaySunday")}</span>
                    <span className="text-sm font-medium text-blue-300">7:00 AM - 11:30 PM</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Contact Info and Order Online */}
              <motion.div variants={itemVariants} className="md:col-span-1">
                <h4 className="font-bold mb-6 text-white text-lg">{t("footer.contactOrder")}</h4>
                <div className="space-y-4 mb-6">
                  <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                    <Phone className="h-5 w-5 mt-1 flex-shrink-0 text-blue-400" />
                    <div>
                      <p className="text-sm font-medium text-blue-300">Phone</p>
                      <p className="text-sm">
                        7417007124
                      </p>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                    <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-blue-400" />
                    <div>
                      <p className="text-sm font-medium text-blue-300">Address</p>
                      <p className="text-sm">Shop No. E-54 Upper Ground, Kohinoor Vivacity, DN Parande Park Marg, Dhanori, Pune 411015</p>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <p className="text-sm mb-3 text-blue-300 font-medium">{t("footer.orderOnline")}</p>
                  <FoodDeliveryButtons variant="footer" />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-gray-700 mt-12 pt-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-center md:text-left">
                  &copy; {new Date().getFullYear()} {t("footer.copyright")}
                </p>
                <motion.div
                  className="flex items-center gap-2 text-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="h-4 w-4 text-blue-400" />
                  </motion.div>
                  <span>{t("footer.tagline")}</span>
                  <motion.div
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="h-4 w-4 text-blue-400" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
