import './randomChar.scss';
// import thor from '../../resources/img/thor.jpeg';
import mjolnir from '../../resources/img/mjolnir.png';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';



class RandomChar extends Component {
    // constructor(props) {
    //     super(props);
    //     //ВЫзов происходит до того, как строится верстка, в конструкторе делать так не очень хорошо
    // }

    state = {
        char: {},
        loading: true,
        error: false
    }
    
    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
        // this.timerID = setInterval(this.updateChar, 300000);// не забыть очистка интервала
    }


    componentWillUnmount() {
        // clearInterval(this.timerID);
    }

    onCharLoaded = (char) => {
        this.setState({char: char, loading: false})
    }

    onCharLoading = () => {
        this.setState({loading: true, error: false});
    }

    onError = () => {
        this.setState({loading: false, error: true})
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        // const id = 9090909;
        this.onCharLoading();
        // this.marvelService.getAllCharacters().then(res => console.log(res))
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    

    
        
    


    render() {
        const {char, loading, error} = this.state;


        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <div className="randomchar">
                {/* {loading ? <Spinner/> : <View char={char}/>} */}
                {errorMessage}
                {spinner}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main" onClick={this.updateChar}>
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;
    const imgStyle = thumbnail ==='http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {objectFit:'contain'} : null;

    return (
        <div className="randomchar__block">
            {/* <img src={thumbnail} alt="Random character" className="randomchar__img"/> */}
            <img src={thumbnail} alt="Random character" className="randomchar__img" style={imgStyle}/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;