import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const recentOrders = [
    {
      id: '1',
      title: 'Beef Burger, Ice Cream, Berries',
      date: '21 Thu 10:00',
      price: '$38.15',
      image: require('./assets/burger1.png'), // Replace with your image paths
    },
    {
      id: '2',
      title: 'Beef Burger, Peparini Moo, Cheese Bust',
      date: '15 Fri 18:00',
      price: '$38.15',
      image: require('./assets/burger1.png'),
    },
    {
      id: '3',
      title: 'Beef Burger, Ketchup, French Fries',
      date: '11 Mon 10:00',
      price: '$30.50',
      image: require('./assets/burger1.png'),
    },
  ];

  const renderOrder = ({ item }) => (
    <View style={styles.orderCard}>
      <Image source={item.image} style={styles.orderImage} />
      <View style={styles.orderDetails}>
        <Text style={styles.orderTitle}>{item.title}</Text>
        <Text style={styles.orderDate}>{item.date}</Text>
      </View>
      <Text style={styles.orderPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Text style={styles.profileTitle}>My Profile</Text>
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: 'https://wallpapers.com/images/hd/pretty-profile-pictures-zenm2vnix8c16700.jpg' }} // Replace with actual profile image
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Kari Rasmussen</Text>
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Icon name="cube-outline" size={30} color="#ff8c00" />
              <Text style={styles.statNumber}>14,850</Text>
              <Text style={styles.statLabel}>Product Sells</Text>
            </View>
            <View style={styles.statItem}>
              <Icon name="cash-outline" size={30} color="#ffd700" />
              <Text style={styles.statNumber}>30bil+</Text>
              <Text style={styles.statLabel}>Earnings</Text>
            </View>
          </View>
        </View>
      </View>


      {/* Recent Orders Section */}
      <View style={styles.recentOrdersSection}>
        <Text style={styles.recentOrdersTitle}>Recent Orders</Text>
        <FlatList
          data={recentOrders}
          renderItem={renderOrder}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f1e7',
    padding: 20,
  },
  profileSection: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileImage: {
    width: 80, 
    height: 80,
    borderRadius: 40, 
    marginBottom: 10,
    borderWidth: 2, 
    borderColor: '#fff', 
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
  },
  recentOrdersSection: {
    marginTop: 20,
  },
  recentOrdersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderCard: {
    backgroundColor: '#333',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  orderDetails: {
    flex: 1,
  },
  orderTitle: {
    fontSize: 16,
    color: '#fff',
  },
  orderDate: {
    fontSize: 12,
    color: '#ccc',
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
