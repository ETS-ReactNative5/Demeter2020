const TomatoClasses = {
    0: 'Tomato___Bacterial_spot',
    1: 'Tomato___Late_blight',
    2: 'Tomato___Tomato_mosaic_virus',
    3: 'Tomato___Target_Spot',
    4: 'Tomato___Leaf_Mold',
    5: 'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
    6: 'Tomato___Early_blight',
    7: 'Tomato___Spider_mites Two-spotted_spider_mite',
    8: 'Tomato___Septoria_leaf_spot',
    9: 'Tomato___healthy'
}

const AppleClasses = {
    0: 'Apple___Apple_scab',
    1: 'Apple___healthy',
    2: 'Apple___Cedar_apple_rust',
    3: 'Apple___Black_rot',
}

const CherryClasses = {
    0: 'Cherry_(including_sour)___Powdery_mildew',
    1: 'Cherry_(including_sour)___healthy',
}

const AllClasses = {
    'Tomato': TomatoClasses,
    'Apple': AppleClasses,
    'Cherry': CherryClasses,
}

export default AllClasses