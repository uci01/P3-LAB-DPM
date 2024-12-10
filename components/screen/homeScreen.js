import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../header';
import Card from '../card';

const HomeScreen = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setCards([
          { id: 1, title: 'Nama', description: 'Suci Suryani.' },
          { id: 2, title: 'Npm', description: '223510725' },
        ]);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} description={card.description} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default HomeScreen;
