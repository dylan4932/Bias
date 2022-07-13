const { IntegerKind } = require('@sinclair/typebox')
const mongoose = require('mongoose')

const Item = mongoose.model('Item', {
    count: {
        type: String,
        required: true,
    },
    name_en:{
        type: String,
		required: true,
		minlegth: 5, 
    },
	name: {
		type: String,
		required: true,
		minlegth: 5,
    },
    definition: {
        type: String,
		minlegth: 10,
		trim: true
    },
    definition_en: {
        type: String,
		minlegth: 10,
		trim: true
    },
    background: {
        type: String,
		required: true,
		minlegth: 10,
    },
    background_en: {
        type: String,
		required: true,
		minlegth: 10,
    },
    example: {
        type:String,
        required: true,
        minlegth: 10,
    },
    example_en: {
        type:String,
        required: true,
        minlegth: 10,
    },
    Impact: {
        type: String,
		required: true,
		minlegth: 1,
	},
    Impact_en: {
        type: String,
		required: true,
		minlegth: 1,
	},
	prevent: {
        type: String,
		required: true,
		minlegth: 1,
    },
	prevent_en: {
        type: String,
		required: true,
		minlegth: 1,
    },
	source: {
		type: Array,
		required: true
	},
    pubmed:{
        type:String,
        required: true
    }
    
})

module.exports = { Item }