import React, {useRef} from 'react';
import { View , Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { AntDesign } from '@expo/vector-icons';
import MapView from 'react-native-maps';


import { Container , 
  ContainerInput , 
  Title , 
  Label , 
  ContainerTitulo , 
  ContainerCardsPedidosOK , 
  SlideView , 
  ContainerDescriptMaps , 
  ContainerDescriptItensMaps ,
  ContainerLabelMaps ,
  ContaierStarMaps

} 
  
  from './styles';

import Input from '../../../component/input/index';
import {DatabasePoits} from '../../../server/api'
import { widthScreen , shadown} from '../../../styles'

export default function NewDelivery() {

  const CarouselRef = useRef(null)

  const reder = ({item , index})=>{

    return(

      <View>

        <SlideView style={{shadown}}>

         <MapView 

          style={{flex:1}} 
          initialRegion={ 

            item

          } 
          zoomEnabled={false} 
          scrollEnabled={false}
          > 

        </MapView>

        </SlideView>

        <ContainerDescriptMaps/>

        <ContainerDescriptItensMaps>

              <Title>Titulo do pedido</Title>

          <ContainerLabelMaps>

              <Label>
                Descrição da entrega.
              </Label>

          </ContainerLabelMaps>

          <ContaierStarMaps>

              <AntDesign name="star" size={16} color="#fff200" />
              <AntDesign name="star" size={16} color="#fff200" />
              <AntDesign name="star" size={16} color="#fff200" />
              <AntDesign name="star" size={16} color="#fff200" />
              <AntDesign name="star" size={16} color="#FEF99C" />
              <AntDesign name="star" size={16} color="#FEF99C" />

          </ContaierStarMaps>
          
        </ContainerDescriptItensMaps>

      </View>

    )

  }
 return (
   <Container>
     
     <ContainerInput>

     <Input Icon={AntDesign} name='search1' place='Local de destino' placeTextColor='#dfe4ea'/>

     </ContainerInput>

     <ContainerTitulo>

        <Title>Entregas Finalizadas</Title>

     </ContainerTitulo>

     <ContainerCardsPedidosOK>

        <Carousel 
        ref={CarouselRef}
        data={DatabasePoits}
        renderItem={reder}
        sliderWidth={widthScreen}
        itemWidth={180}
        firstItem={1}
        />

     </ContainerCardsPedidosOK>

   </Container>
  );
}