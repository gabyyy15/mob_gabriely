import { StyleSheet, Text, View } from 'react-native';

const eu = {
  nome: "Julia",
  idade: 17,
  cidade: "Cascavel",
  nota1: 8,
  nota2: 6,
};

function calcularMedia(objeto) {
  return (objeto.nota1 + objeto.nota2) / 2;
}

function verificarSituacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else {
    return "Em recuperacao";
  }
}

export default function App() {
  const media = calcularMedia(eu);

  return (
    <View style={styles.container}>
      <Text>Nome: {eu.nome}</Text>
      <Text>Idade: {eu.idade}</Text>
      <Text>Cidade: {eu.cidade}</Text>

      <Text>Nota 1: {eu.nota1}</Text>
      <Text>Nota 2: {eu.nota2}</Text>

      <Text>Média: {media}</Text>
      <Text>Situação: {verificarSituacao(media)}</Text>
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
