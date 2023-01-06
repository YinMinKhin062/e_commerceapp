<template>
	<Slider></Slider>
	<Feature></Feature>
	<FeaturedProduct></FeaturedProduct>
</template>

<script>
import FeaturedProduct from '../components/FeaturedProduct';
import Feature from '../components/Feature';
import Slider from '../components/Slider';
export default {
	name: 'HomeView',
	components: {
		FeaturedProduct,
		Feature,
		Slider,
	},
};
</script>
