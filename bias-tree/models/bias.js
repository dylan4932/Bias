const mongoose = require('mongoose')

const Bias = mongoose.model('Bias', {
    
    name_en:{
        type: String,
		required: true,
		minlegth: 1
    },
	name: {
		type: String,
		required: true,
		minlegth: 1
    },
    definition: {
        type: String,
		minlegth: 10,
		minlegth: 10
    },
    definition_en: {
        type: String,
		minlegth: 10,
		minlegth: 10
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
    impact: {
        type: String,
		required: true,
		minlegth: 1,
	},
    impact_en: {
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
	sources: {
		type: Array,
		required: true
	},
    pubmed:{
        type:String,
        required: true
    }
    
})

module.exports = { Bias }