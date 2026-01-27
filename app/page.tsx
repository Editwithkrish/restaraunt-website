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
  Search,
  User,
  ShoppingBag,
  Sparkles,
  Flame,
  UtensilsCrossed,
  Leaf,
  Zap,
  MessageCircle,
  Utensils,
  Crown,
  ChevronDown,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import MenuCategory from "@/components/menu-category"
import MenuItemCard from "@/components/menu-item-card"
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
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import FoodDeliveryButtons from "@/components/food-delivery-buttons"
import OrderButtonsHero from "@/components/order-buttons-hero"
import { useTranslation } from "@/hooks/use-translation"
import LanguageSwitcher from "@/components/language-switcher"
import AnimatedText from "@/components/animated-text"
import FloatingElements from "@/components/floating-elements"
import EnhancedButton from "@/components/enhanced-button"
import FAQSection from "@/components/faq-section"
import { BRANDING_IMAGES, HERO_IMAGES, FEATURED_DISHES, GALLERY_IMAGES } from "@/lib/image-config"

import FreeDeliverySection from "@/components/free-delivery-section"
import { cn } from "@/lib/utils"
import BottomNav from "@/components/bottom-nav"
import FloatingOrderButton from "@/components/floating-order-button"

export default function Home() {
  const { t, language } = useTranslation()
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -100])

  // Search logic
  const allMenuItems = Object.values(menuData).flat()
  const searchResults = searchQuery.trim().length > 1
    ? allMenuItems.filter(item => {
      if (!item) return false;
      const lowerQuery = searchQuery.toLowerCase();

      // Flexible matching
      if (lowerQuery === "bestseller" || lowerQuery === "popular" || lowerQuery === "star" || lowerQuery === "best") return (item as any).isPopular;
      if (lowerQuery === "veg" || lowerQuery === "vegetarian") return item.isVeg;
      if (lowerQuery === "non veg" || lowerQuery === "nonveg" || lowerQuery === "non-veg" || lowerQuery === "chicken" || lowerQuery === "egg") {
        if (lowerQuery === "chicken" && item.name.toLowerCase().includes("chicken")) return true;
        if (lowerQuery === "egg" && item.name.toLowerCase().includes("egg")) return true;
        return !item.isVeg;
      }

      const nameMatch = item.name?.toLowerCase().includes(lowerQuery);
      const englishNameMatch = (item as any).englishName?.toLowerCase().includes(lowerQuery);
      const descriptionMatch = (item as any).description?.toLowerCase().includes(lowerQuery);

      return nameMatch || englishNameMatch || descriptionMatch;
    })
    : []

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2000)

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

      {/* App Header (Traditional Premium) */}
      <motion.header
        className="fixed top-0 w-full z-50 bg-primary shadow-2xl border-b-4 border-maroon-900/10 h-24 flex items-center transition-all duration-500"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <div className="w-40 h-16 md:w-56 md:h-20 relative transition-transform active:scale-95 hover:scale-105 duration-300">
              <Image src={BRANDING_IMAGES.logo} alt="Suruchi's Kitchen Logo" fill className="object-contain" priority />
            </div>
          </Link>

          <div className="flex items-center gap-3 md:gap-8">
            <div className="hidden xl:flex items-center gap-10 mr-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-xs font-black text-maroon-900 hover:text-maroon-950 transition-all uppercase tracking-[0.3em] relative group">
                  {t(`nav.${item.name}`)}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-maroon-950 transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <a
                href="tel:7417007124"
                className="bg-maroon-900 hover:bg-maroon-950 text-white px-5 py-3 md:px-8 md:py-4 rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-[0.2em] shadow-2xl shadow-maroon-900/30 transition-all flex items-center gap-3 active:translate-y-1"
              >
                <Phone className="h-4 w-4 fill-current" />
                <span className="hidden sm:inline font-black">CALL TO ORDER</span>
                <span className="sm:hidden font-black">ORDER</span>
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Discovery Hero Section */}
      <section className="pt-40 pb-24 md:pb-32 bg-primary relative overflow-hidden">
        {/* Intricate Background Patterns */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none"
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/pinstripe.png")' }} />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-maroon-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-10"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white shadow-xl rounded-2xl text-maroon-900 font-black uppercase text-[10px] md:text-xs tracking-[0.3em] border-2 border-maroon-900/5"
                >
                  <div className="h-3 w-3 bg-secondary rounded-full animate-pulse" />
                  <span>The Pride of Dhanori, Pune</span>
                </motion.div>

                <h1 className="text-6xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-black text-maroon-900 tracking-tighter leading-[0.85] uppercase drop-shadow-2xl">
                  TASTE THE <br />
                  <span className="text-maroon-900 italic relative inline-block font-serif tracking-normal mt-4">
                    Tradition
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "110%" }}
                      transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
                      className="absolute -bottom-4 -left-[5%] h-6 bg-secondary/30 -z-10 rounded-full blur-[2px]"
                    />
                  </span>
                </h1>

                <p className="text-lg md:text-2xl font-bold text-maroon-900/80 uppercase tracking-widest max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans mt-4">
                  Savor the <span className="text-maroon-900 border-b-8 border-secondary/30 pb-1">True Magic</span> of Homemade Authentic Flavors.
                </p>

                {/* Enhanced Search Bar */}
                <div className="relative group max-w-xl mx-auto lg:mx-0 transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
                    <Search className="h-8 w-8 text-maroon-900 group-focus-within:text-secondary transition-colors" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="WANT TO TRY SOMETHING?"
                    className="w-full bg-white border-4 border-maroon-900/10 rounded-[2.5rem] py-7 pl-20 pr-8 text-maroon-900 font-black focus:outline-none focus:ring-[1rem] focus:ring-maroon-900/5 transition-all h-20 text-xl placeholder:text-gray-400 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute inset-y-0 right-8 flex items-center text-gray-400 hover:text-maroon-900 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-900 font-black text-2xl shadow-inner">×</div>
                    </button>
                  )}
                </div>

                <OrderButtonsHero className="pt-4 max-w-xl mx-auto lg:mx-0" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-square max-w-[500px] xl:max-w-[650px] mx-auto group"
            >
              {/* Multi-layered decorative backgrounds */}
              <div className="absolute inset-0 bg-maroon-900/5 rounded-full scale-110 blur-3xl animate-pulse" />
              <div className="absolute inset-0 border-8 border-dashed border-white/40 rounded-full animate-[spin_40s_linear_infinite]" />

              {/* Main Hero Thali Image Container */}
              <div className="relative w-full h-full rounded-full border-[2rem] border-white shadow-[0_80px_100px_-30px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-700 group-hover:scale-[1.03] group-hover:shadow-[0_100px_120px_-40px_rgba(0,0,0,0.5)]">
                <Image
                  src={HERO_IMAGES.heroBackground}
                  alt="Premium Indian Thali"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating tags */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-12 -right-4 bg-white p-8 rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.25)] border-8 border-primary/20 z-20 hidden md:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="h-6 w-6 text-primary" />
                  <p className="text-[12px] font-black uppercase tracking-[0.2em] text-maroon-900/50">Naturally</p>
                </div>
                <p className="text-4xl font-black text-maroon-900 tracking-tighter leading-none">Homemade</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 2.5, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-12 bg-maroon-900 p-8 rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.35)] border-8 border-white/10 z-20 hidden md:block"
              >
                <p className="text-[12px] font-black uppercase tracking-[0.2em] text-white/50 text-center mb-2">Serving Love</p>
                <div className="flex items-center gap-3 text-white">
                  <Star className="h-6 w-6 text-primary fill-current" />
                  <p className="text-3xl font-black tracking-tighter leading-none italic font-serif">Every Day</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic Search Results Section */}
      <AnimatePresence>
        {
          searchQuery.trim().length > 1 && (
            <motion.section
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-background border-b border-secondary/10 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-12">
                <div className="flex items-center justify-between mb-8 border-b-2 border-primary/20 pb-4">
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">
                    Results for "<span className="text-primary">{searchQuery}</span>"
                  </h2>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors flex items-center gap-2"
                  >
                    Close Results <span className="text-lg">×</span>
                  </button>
                </div>

                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {searchResults.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <MenuItemCard {...item} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center bg-white rounded-[3rem] border-4 border-dashed border-primary/20">
                    <p className="text-gray-400 font-black uppercase tracking-widest text-lg">No authentic dishes found matching your search.</p>
                    <button
                      onClick={() => setSearchQuery("")}
                      className="mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-black uppercase text-xs tracking-[0.2em]"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </div>
            </motion.section>
          )
        }
      </AnimatePresence>

      {/* Menu Section */}
      <section id="menu" className="py-12 bg-gray-50/50 scroll-mt-16">
        <div className="container mx-auto">
          <ModernSectionHeader
            title={t("menu.title")}
            subtitle="Explore Our Cuisines"
            description={t("menu.description")}
            icon={<Utensils className="h-8 w-8 text-white" />}
          />

          <Tabs defaultValue="thalis" className="mt-4">
            <div className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="overflow-x-auto no-scrollbar scroll-smooth">
                <TabsList className="h-14 flex justify-start gap-8 bg-transparent w-max border-none px-4">
                  {[
                    { value: "thalis", label: "Specials & Thalis" },
                    { value: "starters", label: "Starters & Snacks" },
                    { value: "vegMain", label: "Veg Specialties" },
                    { value: "nonVegMain", label: "Chicken Specialties" },
                    { value: "chinese", label: "Chinese Corner" },
                    { value: "riceBiryani", label: "Rice & Biryani" },
                    { value: "breads", label: "Indian Breads" },
                    { value: "beveragesSweets", label: "Beverages & Desserts" },
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="px-6 py-4 bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-4 border-transparent data-[state=active]:border-primary rounded-none text-gray-500 data-[state=active]:text-primary font-black uppercase tracking-[0.2em] transition-all text-[11px] md:text-xs min-w-max"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>

            <div className="px-4 py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="thalis" className="mt-0 focus-visible:outline-none focus:outline-none border-none">
                    <MenuCategory items={menuData.thalis} title="Signature Thalis" />
                  </TabsContent>
                  <TabsContent value="starters" className="mt-0 focus-visible:outline-none focus:outline-none border-none">
                    <MenuCategory items={menuData.starters} title="Starters & Street Food" />
                  </TabsContent>
                  <TabsContent value="vegMain" className="mt-0 focus-visible:outline-none focus:outline-none border-none">
                    <MenuCategory items={menuData.vegMain} title="Main Course (Vegetarian)" />
                  </TabsContent>
                  <TabsContent value="nonVegMain" className="mt-0 focus-visible:outline-none focus:outline-none border-none">
                    <MenuCategory items={menuData.nonVegMain} title="Main Course (Chicken)" />
                  </TabsContent>
                  <TabsContent value="chinese" className="mt-0 focus-visible:outline-none focus:outline-none border-none">
                    <MenuCategory items={menuData.chinese} title="Indo-Chinese Fusion" />
                  </TabsContent>
                  <TabsContent value="riceBiryani" className="mt-0 focus-visible:outline-none focus:outline-none border-none">
                    <MenuCategory items={menuData.riceBiryani} title="Rice & Biryani" />
                  </TabsContent>
                  <TabsContent value="breads" className="mt-0 focus-visible:outline-none focus:outline-none border-none">
                    <MenuCategory items={menuData.breads} title="Indian Breads & Bhakri" />
                  </TabsContent>
                  <TabsContent value="beveragesSweets" className="mt-0 focus-visible:outline-none focus:outline-none border-none">
                    <MenuCategory items={menuData.beveragesSweets} title="Refreshing Drinks & Desserts" />
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Minimal Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-around items-center gap-4 text-center">
            {[
              { label: "Happy Customers", value: "2000+", icon: <Users className="h-5 w-5" /> },
              { label: "Authentic Dishes", value: "150+", icon: <Utensils className="h-5 w-5" /> },
              { label: "Expert Chefs", value: "10+", icon: <Crown className="h-5 w-5" /> }
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-xl font-black text-gray-900 leading-none mb-1 uppercase tracking-tighter">{stat.value}</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
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
                    <Badge className="bg-primary text-white border-none shadow-lg">
                      <Sparkles className="h-4 w-4 mr-1 text-white" />
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
                    className="p-4 bg-primary/10 rounded-lg border border-red-100"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-bold text-gray-800 mb-2">Authentic Cuisines</h4>
                    <p className="text-sm text-gray-600">Experience the rich heritage of Maharashtrian and Indian flavors.</p>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="p-4 bg-primary/10 rounded-lg border border-red-100"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-bold text-gray-800 mb-2">Heritage Cooking</h4>
                    <p className="text-sm text-gray-600">Time-tested recipes passed down through generations.</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Suggestions */}
      <section className="py-16 bg-white border-y border-gray-50">
        <div className="container mx-auto px-4">
          <ModernSectionHeader
            title="MUST TRY"
            subtitle="Handpicked Favorites"
          />

          <div className="flex gap-6 overflow-x-auto no-scrollbar -mx-4 px-4 pb-4">
            {[
              { name: "Misal Pav", image: FEATURED_DISHES.misalPav, tags: ["Popular", "Spicy"] },
              { name: "Puran Poli", image: FEATURED_DISHES.puranPoli, tags: ["Sweet", "Classic"] },
              { name: "Vada Pav", image: FEATURED_DISHES.vadaPav, tags: ["Bestseller"] },
              { name: "Modak", image: FEATURED_DISHES.modak, tags: ["Fasting"] },
              { name: "Masala Dosa", image: FEATURED_DISHES.masalaDosa, tags: ["South Indian"] },
            ].map((dish) => (
              <motion.div
                key={dish.name}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-48 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className="relative h-32 w-full">
                  <Image src={dish.image} alt={dish.name} fill className="object-cover" />
                </div>
                <div className="p-3">
                  <h4 className="font-black text-sm text-gray-900 uppercase tracking-tighter mb-1">{dish.name}</h4>
                  <div className="flex flex-wrap gap-1">
                    {dish.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-black bg-primary/10 text-primary px-1.5 py-0.5 rounded uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FreeDeliverySection />

      {/* Location Section */}
      <section id="location" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ModernSectionHeader
            title="FIND US"
            subtitle="Visit Our Kitchen"
          />

          <div className="grid lg:grid-cols-2 gap-8 mt-4">
            <div className="h-80 md:h-[400px] rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative">
              <LocationMap />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-gray-100 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black text-gray-900 uppercase">Open Now</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary p-3 rounded-2xl"><MapPin className="h-6 w-6 text-white" /></div>
                  <div>
                    <h4 className="font-black text-gray-900 uppercase tracking-tighter mb-1">Dhanori Outlet</h4>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{t("location.addressLine1")}, {t("location.addressLine2")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gray-900 p-3 rounded-2xl"><Clock className="h-6 w-6 text-white" /></div>
                  <div>
                    <h4 className="font-black text-gray-900 uppercase tracking-tighter mb-1">{t("location.hoursTitle")}</h4>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-tight">{t("location.hours")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl"><Phone className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h4 className="font-black text-gray-900 uppercase tracking-tighter mb-1">Contact</h4>
                    <a href="tel:7417007124" className="text-lg font-black text-primary tracking-tighter">7417007124</a>
                  </div>
                </div>
              </div>
              <FoodDeliveryButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50/50">
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
      <section id="contact" className="py-20 bg-gray-50/50">
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
                  <h3 className="text-2xl font-black mb-6 text-gray-900 uppercase tracking-tighter">Send Us a Message</h3>
                  <form className="space-y-6">
                    <motion.div
                      className="grid grid-cols-2 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <div>
                        <label htmlFor="name" className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">
                          {t("contact.name")}
                        </label>
                        <motion.input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 border border-gray-100 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:bg-white transition-all duration-300"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">
                          {t("contact.phone")}
                        </label>
                        <motion.input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 border border-gray-100 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:bg-white transition-all duration-300"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">
                        {t("contact.email")}
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-100 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:bg-white transition-all duration-300"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="message" className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">
                        {t("contact.message")}
                      </label>
                      <motion.textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-100 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:bg-white transition-all duration-300"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button className="w-full bg-primary hover:bg-red-700 text-white py-6 rounded-2xl text-lg font-black uppercase tracking-tighter shadow-lg shadow-primary/20">
                        {t("contact.sendButton")}
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </EnhancedCard>

              <EnhancedCard delay={0.4}>
                <div className="p-8 bg-gray-900 text-white h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                  <h3 className="text-2xl font-black mb-8 text-white uppercase tracking-tighter">Quick Contact</h3>

                  <div className="space-y-6 mb-8">
                    <motion.div
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <motion.div
                        className="p-3 bg-primary rounded-xl flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Phone className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Phone</h4>
                        <p className="text-white font-black uppercase tracking-tighter">7417007124</p>
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
                        className="p-3 bg-gray-800 rounded-xl flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <MapPin className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Address</h4>
                        <p className="text-white text-xs font-bold uppercase tracking-tight leading-relaxed">
                          Shop No. E-54 Upper Ground, Kohinoor Vivacity, Dhanori, Pune 411015
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
                        className="p-3 bg-primary rounded-xl flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Instagram className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Instagram</h4>
                        <a
                          href="#"
                          className="text-white hover:text-primary/100 transition-colors text-sm font-black uppercase tracking-tighter"
                        >
                          Follow us @suruchi_kitchen
                        </a>
                      </div>
                    </motion.div>
                  </div>

                  <div className="space-y-4 pt-8 border-t border-white/5">
                    <motion.div
                      className="p-4 bg-white/5 rounded-2xl border border-white/5"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="font-black text-primary/100 mb-2 flex items-center gap-2 text-xs uppercase tracking-widest">
                        <Sparkles className="h-4 w-4" />
                        Free Delivery
                      </h4>
                      <p className="text-gray-400 text-[10px] uppercase font-bold tracking-tight">Under 2KM distance from our outlet.</p>
                    </motion.div>
                  </div>
                </div>
              </EnhancedCard>
            </div>
          </div>
        </div>
      </section>

      {/* App Footer */}
      <footer className="bg-maroon-950 text-white pt-20 pb-40 border-t-8 border-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-8">
              <div className="w-48 h-20 relative px-2 py-2 bg-white rounded-2xl">
                <Image src={BRANDING_IMAGES.logo} alt="Suruchi Logo" fill className="object-contain" />
              </div>
              <p className="text-white/60 text-xs leading-relaxed uppercase font-black tracking-widest">Authentic Home-Style Cooking & Premium Catering Services. Serving traditional Puneri flavors.</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-[#E23744] transition-colors hover:text-white border-b-4 border-gray-700">
                  <span className="font-black text-xl">Z</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-[#FC8019] transition-colors hover:text-white border-b-4 border-gray-700">
                  <span className="font-black text-xl">S</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-primary transition-colors hover:text-primary-foreground border-b-4 border-gray-700">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-8 border-l-4 border-primary pl-4">Explore</h4>
              <ul className="space-y-4">
                {navItems.map(item => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm font-black uppercase tracking-widest text-gray-200 hover:text-primary transition-colors">{t(`nav.${item.name}`)}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-8 border-l-4 border-secondary pl-4">Service Hours</h4>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Morning & Afternoon</p>
                  <p className="text-sm font-black text-white uppercase tracking-widest">07:00 AM - 03:00 PM</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Evening & Night</p>
                  <p className="text-sm font-black text-white uppercase tracking-widest">11:00 AM - 11:30 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-8 border-l-4 border-accent pl-4">Direct Contact</h4>
              <div className="space-y-6">
                <a href="tel:7417007124" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground border-b-4 border-primary/20"><Phone className="h-6 w-6" /></div>
                  <span className="text-xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors">7417007124</span>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 border-b-4 border-white/5"><MapPin className="h-6 w-6" /></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/70 leading-loose">
                    Kohinoor Vivacity,<br />
                    Dhanori, Pune 411015
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[8px] font-black text-white/40 uppercase tracking-[0.3em]">&copy; {new Date().getFullYear()} Suruchi's Kitchen & Caterings. Traditional Excellence.</p>
            <div className="flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Handcrafted with Tradition</span>
            </div>
          </div>
        </div>
      </footer>



      <ScrollToTop />
      <FloatingOrderButton />
      <BottomNav />
    </div >
  )
}
