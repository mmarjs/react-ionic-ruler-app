import { IAreasListItemProps } from './components/AreasListItem/AreasListItem.types';
import { IDamagedVehicleType } from '../MyRides/pages/DamagedVehicle/DamagedVehicle.types';
import { pxToRem } from 'styles';
export const areasListItems: Array<IAreasListItemProps> = [
	{
		iconName: 'out-of-business',
		primaryText: 'home.areas_sheet.out_of_business',
		secondaryText: 'home.areas_sheet.out_of_business.sub_title'
	},
	{
		iconName: 'reduced-speed',
		primaryText: 'home.areas_sheet.speed_reduction',
		secondaryText: 'home.areas_sheet.speed_reduction.sub_title'
	},
	{
		iconName: 'parking-discount',
		primaryText: 'home.areas_sheet.discount_parking',
		secondaryText: 'home.areas_sheet.discount_parking.sub_title'
	},
	{
		iconName: 'no-parking',
		primaryText: 'home.areas_sheet.no_parking',
		secondaryText: 'home.areas_sheet.no_parking.sub_title'
	}
];

export const damagedVehicleTypes: Array<IDamagedVehicleType> = [
	{
		iconName: 'vehicle',
		label: 'home.text.all'
	},
	{
		iconName: 'car',
		label: 'my_rides.damaged_vehicle.text.car'
	},
	{
		iconName: 'bike',
		label: 'my_rides.damaged_vehicle.text.bike'
	},

	{
		iconName: 'scooter',
		label: 'my_rides.damaged_vehicle.text.scooter'
	}
];

export const markerList = [
	{
		lat: 46.947095,
		long: 7.448385,
		iconName: 'scooter',
		vehicleNumber: 0,
		decorator: './images/bird.png',
		detailInfo: [
			{
				iconName: './images/bird.png',
				property: 'Bird',
				description: 'combustion'
			},
			{
				iconName: 'charge',
				property: 70,
				description: 'battery level'
			},
			{
				iconName: 'distance',
				property: '450 m',
				description: 'distance'
			},
			{
				iconName: 'wallet',
				property: '0.13 /min',
				description: '$ 0.5 to unlock'
			}
		],
		pausedInfo: [
			{
				iconName: './images/bird.png',
				property: 'Bird',
				description: 'scooter'
			},
			{
				iconName: 'charge',
				property: '25%',
				description: 'battery level'
			},
			{
				iconName: 'distance',
				property: '1.1 km',
				description: 'traveled'
			},
			{
				iconName: 'wallet',
				property: '$30.5',
				description: 'total cost'
			}
		]
	},
	{
		lat: 46.938095,
		long: 7.448935,
		iconName: 'bike',
		vehicleNumber: 0,
		decorator: './images/spin.png',
		detailInfo: [
			{
				iconName: './images/spin.png',
				property: 'Spin',
				description: 'combustion'
			},
			{
				iconName: 'charge',
				property: 50,
				description: 'battery level'
			},
			{
				iconName: 'distance',
				property: '800 m',
				description: 'distance'
			},
			{
				iconName: 'wallet',
				property: '0.19 /min',
				description: '$ 2 to unlock'
			}
		],
		pausedInfo: [
			{
				iconName: './images/spin.png',
				property: 'Spin',
				description: 'bike'
			},
			{
				iconName: 'charge',
				property: '50%',
				description: 'battery level'
			},
			{
				iconName: 'distance',
				property: '0.9 km',
				description: 'traveled'
			},
			{
				iconName: 'wallet',
				property: '$25.8',
				description: 'total cost'
			}
		]
	},
	{
		lat: 46.9480961,
		long: 7.432368,
		iconName: 'car',
		vehicleNumber: 0,
		decorator: './images/lime.png',
		detailInfo: [
			{
				iconName: './images/lime.png',
				property: 'Lime',
				description: 'electrical'
			},
			{
				iconName: 'charge',
				property: 90,
				description: 'battery level'
			},
			{
				iconName: 'distance',
				property: '1 km',
				description: 'distance'
			},
			{
				iconName: 'wallet',
				property: '0.15 /min',
				description: '$ 1 to unlock'
			}
		],
		pausedInfo: [
			{
				iconName: './images/lime.png',
				property: 'Lime',
				description: 'car'
			},
			{
				iconName: 'charge',
				property: '29%',
				description: 'battery level'
			},
			{
				iconName: 'distance',
				property: '1.3 km',
				description: 'traveled'
			},
			{
				iconName: 'wallet',
				property: '$30.9',
				description: 'total cost'
			}
		]
	}
	// {
	// 	lat: 46.9605985,
	// 	long: 7.455385,
	// 	iconName: '',
	// 	vehicleNumber: 7,
	// 	decorator: ''
	// },
	// {
	// 	lat: 46.963985,
	// 	long: 7.448512,
	// 	iconName: '',
	// 	vehicleNumber: 25,
	// 	decorator: ''
	// }
];

export const scooterInfo = [
	{
		iconName: './images/bird.png',
		property: 'Bird',
		description: 'scooter'
	},
	{
		iconName: 'charge',
		property: '70%',
		description: 'battery level'
	},
	{
		iconName: 'distance',
		property: '450 m',
		description: 'distance'
	},
	{
		iconName: 'wallet',
		property: '0.13 /min',
		description: '$ 0.5 to unlock'
	}
];

export const pausedScooterInfo = [
	{
		iconName: './images/bird.png',
		property: 'Bird',
		description: 'scooter'
	},
	{
		iconName: 'charge',
		property: '25%',
		description: 'battery level'
	},
	{
		iconName: 'distance',
		property: '1.1 km',
		description: 'traveled'
	},
	{
		iconName: 'wallet',
		property: '$30.5',
		description: 'total cost'
	}
];

export const carInfo = [
	{
		iconName: './images/lime.png',
		property: 'Lime',
		description: 'electric car'
	},
	{
		iconName: 'charge',
		property: '79%',
		description: 'battery level'
	},
	{
		iconName: 'distance',
		property: '1 km',
		description: 'distance'
	},
	{
		iconName: 'wallet',
		property: '0.15 /min',
		description: '$ 1 to unlock'
	}
];

export const pausedCarInfo = [
	{
		iconName: './images/lime.png',
		property: 'Lime',
		description: 'electric car'
	},
	{
		iconName: 'charge',
		property: '29%',
		description: 'battery level'
	},
	{
		iconName: 'distance',
		property: '1.3 km',
		description: 'traveled'
	},
	{
		iconName: 'wallet',
		property: '$30.9',
		description: 'total cost'
	}
];

export const bikeInfo = [
	{
		iconName: './images/spin.png',
		property: 'Spin',
		description: 'combustion'
	},
	{
		iconName: 'charge',
		property: '95%',
		description: 'battery level'
	},
	{
		iconName: 'distance',
		property: '2 km',
		description: 'distance'
	},
	{
		iconName: 'wallet',
		property: '0.19 /min',
		description: '$ 5 to unlock'
	}
];

export const pausedBikeInfo = [
	{
		iconName: './images/spin.png',
		property: 'Spin',
		description: 'combustion'
	},
	{
		iconName: 'charge',
		property: '65%',
		description: 'battery level'
	},
	{
		iconName: 'distance',
		property: '1.9 km',
		description: 'traveled'
	},
	{
		iconName: 'wallet',
		property: '$25.2',
		description: 'total cost'
	}
];
export const finishedRideVehicleInfo = [
	{
		iconName: 'charge',
		property: '79 %',
		description: 'battery level'
	},
	{
		iconName: 'distance',
		property: '11 km',
		description: 'traveled'
	},
	{
		iconName: 'ride-history',
		property: '45 min',
		description: 'duration'
	}
];

export const vehicleButtons = [
	{
		label: 'home.text.all',
		iconName: 'vehicle',
		style: {
			padding: `${pxToRem(8)} ${pxToRem(10)} 0 ${pxToRem(10)}`
		}
	},
	{
		label: 'home.text.car',
		iconName: 'car',
		style: {
			padding: `${pxToRem(7)} ${pxToRem(10)} 0 ${pxToRem(10)}`
		}
	},
	{
		label: 'home.text.bike',
		iconName: 'bike',
		style: {
			padding: `${pxToRem(7)} ${pxToRem(10)} 0 ${pxToRem(10)}`
		}
	},
	{
		label: 'home.text.scooter',
		iconName: 'scooter',
		style: {
			padding: `${pxToRem(7)} ${pxToRem(10)} 0 ${pxToRem(10)}`
		}
	}
];
