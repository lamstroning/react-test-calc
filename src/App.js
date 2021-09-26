function App() {
    return (
        <div className='page decoration'>
            <div className='decoration__circle decoration__circle_light'/>
            <div className='decoration__circle decoration__circle_dark'/>
            <div className='calc'>
                <div className='calc__control'>
                    <button className='button'>
                        Calculator
                    </button>
                    <button className='button'>
                        Convertor
                    </button>
                    <button>

                    </button>
                </div>
                <div className='calc__display'>
                    <div className='calc__operation'>

                    </div>
                    <input type='text'/>
                </div>
                <div className='calc__buttons'>
                    <div className='row'>
                        <button className='calc__button'>
                            AC
                        </button>
                        <button className='calc__button'>
                            x
                        </button>
                        <button className='calc__button'>
                            %
                        </button>
                        <button className='calc__button'>
                            del
                        </button>
                    </div>
                    <div className='row'>
                        <button className='calc__button'>
                            7
                        </button>
                        <button className='calc__button'>
                            8
                        </button>
                        <button className='calc__button'>
                            9
                        </button>
                        <button className='calc__button'>
                            X
                        </button>
                    </div>
                    <div className='row'>
                        <button className='calc__button'>
                            4
                        </button>
                        <button className='calc__button'>
                            5
                        </button>
                        <button className='calc__button'>
                            6
                        </button>
                        <button className='calc__button'>
                            -
                        </button>
                    </div>
                    <div className='row'>
                        <button className='calc__button'>
                            1
                        </button>
                        <button className='calc__button'>
                            2
                        </button>
                        <button className='calc__button'>
                            3
                        </button>
                        <button className='calc__button'>
                            +
                        </button>
                    </div>
                    <div className='row'>
                        <button className='calc__button'>
                            ±
                        </button>
                        <button className='calc__button'>
                            0
                        </button>
                        <button className='calc__button'>
                            .
                        </button>
                        <button className='calc__button'>
                            =
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
