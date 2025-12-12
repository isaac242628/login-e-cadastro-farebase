import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, SafeAreaView } from "react-native"
import { StatusBar } from "expo-status-bar"

const PRODUCTS = [
  {
    id: "1",
    name: "Air Max 270",
    category: "Tênis Masculino",
    price: "R$ 899,99",
    image: "/nike-air-max-270-sneaker.jpg",
  },
  {
    id: "2",
    name: "Air Force 1",
    category: "Tênis Feminino",
    price: "R$ 799,99",
    image: "/nike-air-force-1-white-sneaker.jpg",
  },
  {
    id: "3",
    name: "Dri-FIT",
    category: "Camiseta Esportiva",
    price: "R$ 199,99",
    image: "/nike-dri-fit-black-shirt.jpg",
  },
  {
    id: "4",
    name: "Jordan 1",
    category: "Tênis Masculino",
    price: "R$ 1.299,99",
    image: "/air-jordan-1-sneaker.jpg",
  },
]

export default function HomeScreen() {
  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productCategory}>{item.category}</Text>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: "/nike-swoosh-logo-white.jpg" }} style={styles.logo} resizeMode="contain" />
        <TouchableOpacity>
          <Text style={styles.cartIcon}>🛒</Text>
        </TouchableOpacity>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Just Do It</Text>
        <Text style={styles.heroSubtitle}>Novos lançamentos Nike</Text>
      </View>

      {/* Products */}
      <FlatList
        data={PRODUCTS}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  logo: {
    width: 60,
    height: 40,
  },
  cartIcon: {
    fontSize: 24,
  },
  hero: {
    padding: 24,
    backgroundColor: "#1a1a1a",
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#999",
  },
  productList: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: 150,
    backgroundColor: "#2a2a2a",
  },
  productInfo: {
    padding: 12,
  },
  productCategory: {
    fontSize: 12,
    color: "#999",
    marginBottom: 4,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
})
