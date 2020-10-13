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

const StrawberryClasses = {
    0: 'Strawberry___Leaf_scorch',
    1: 'Strawberry___healthy'
}

const GrapeClasses = {
    0: 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
    1: 'Grape___Esca_(Black_Measles)',
    2: 'Grape___healthy',
    3: 'Grape___Black_rot'
}

const PeachClasses ={
    0: 'Peach___Bacterial_spot',
    1: 'Peach___healthy'
}

const CornClasses = {
    0: 'Corn_(maize)___Northern_Leaf_Blight',
    1: 'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
    2: 'Corn_(maize)___healthy',
    3: 'Corn_(maize)___Common_rust_'
}

const PotatoClasses = {
    0: 'Potato___healthy',
    1: 'Potato___Late_blight',
    2: 'Potato___Early_blight'
}

const AllClasses = {
    'Tomato': TomatoClasses,
    'Apple': AppleClasses,
    'Cherry': CherryClasses,
    'Strawberry': StrawberryClasses,
    'Grape': GrapeClasses,
    'Peach': PeachClasses,
    'Corn': CornClasses,
    'Potato': PotatoClasses
}

export default AllClasses