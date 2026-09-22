import { StyleSheet, Text, View } from 'react-native';

const eu = {
  nome: "Julia",
  idade: 17,
  cidade: "cascavel"
};
const eu2 = {
  nome: "João",
  nota1: 8,
  nota2: 6,
};

function calcularMedia(objeto) {
  return (objeto.nota1 + objeto.nota2) / 2;
}

function App() {
  return (
    <div>
      <h1>Média: {calcularMedia(eu)}</h1>
    </div>
  );
}

export default App;


export default function App() {
  return (
    <View style={styles.container}>
      <Text>{eu.nome}</Text>
    <Text>{eu.idade}</Text>
     <Text>{eu.cidade}</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
