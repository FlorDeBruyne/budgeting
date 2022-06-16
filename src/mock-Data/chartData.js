// add type so you can switch between kind of chart
// depending on what radius button is selected

const category = [
	{
		id: 1,
		name: "Housing",
	},
	{
		id: 2,
		name: "Transportation",
	},
	{
		id: 3,
		name: "Food",
	},
	{
		id: 4,
		name: "Utilities",
	},
	{
		id: 5,
		name: "Insurance",
	},
	{
		id: 6,
		name: "Medical & Healthcare",
	},
	{
		id: 7,
		name: "Daving, Investing & Debt Payments",
	},
	{
		id: 8,
		name: "Personal Spending",
	},
	{
		id: 9,
		name: "Recreation & Entertainment",
	},
	{
		id: 10,
		name: "Miscellaneous",
	},
];

const expense = [
  {
    id : 1,
    amount: 30,
    name: "Breakfast carrefour",
    categoryId : 3 
  },
  {
    id : 2,
    amount: 20,
    name: "Drinking pub",
    categoryId : 9
  },
  {
    id : 3,
    amount: 30,
    name: "Groceries Okay",
    categoryId : 3
  },
  {
    id : 4,
    amount:10,
    name: "Train to Brugges and back",
    categoryId : 2
  },
  {
    id : 5,
    amount: 50,
    name: "Hospital bill",
    categoryId : 6
  },
  {
    id : 6,
    amount: 60,
    name: "Insurance payment",
    categoryId :5
  },
  {
    id : 7,
    amount: 70,
    name: "Vacation Paris",
    categoryId : 8
  },
  {
    id : 8,
    amount: 80,
    name: "Weekend trip",
    categoryId : 8
  },
  {
    id : 9,
    amount: 90,
    name: "New Phone",
    categoryId : 8
  },
  {
    id : 10,
    amount: 100,
    name: "",
    categoryId :10
  },

]





const CHART_DATA = [
	{
		title: "Monthly expenses",
		expense: expense,
		category: category,

	},
];

export default CHART_DATA;

// 1: "Housing",
// 2:"Transportation",
// 3:"Food",
// 4:"Utilities",
// 5:"Insurance",
// 6:"Medical & Healthcare",
// 7:"Saving, Investing, & Debt Payments",
// 8:"Personal Spending",
// 9: "Recreation & Entertainment",
// 10: "Miscellaneous",
