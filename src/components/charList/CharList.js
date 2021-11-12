import { Component } from 'react';
import './charList.scss';
// import abyss from '../../resources/img/abyss.jpg';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import PropTypes from 'prop-types';

class CharList extends Component {
    state = {
        chars: [],
        loading: true,
        error: false,
        newItemsLoading: false,
        offset: 300,
        charEnded: false,
    }
    
    marvelService = new MarvelService();

    componentDidMount() {
        //this.updateChars();
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onNewCharsLoading();
        this.marvelService
        .getAllCharacters(offset)
        .then(this.onCharsLoaded)
        .catch(this.onError)
    }

    

    onCharsLoaded = (newchars) => {
        let ended=false;
        if (newchars.length < 9) {
            ended = true
        }

        this.setState(({chars, offset}) => 
            ({
                chars: [...chars, ...newchars],
                loading: false,
                newItemsLoading: false,
                offset: offset + 9,
                charEnded: ended,
            })
            
        );
        
    }

    onError = () => {
        this.setState({loading: false, error: true})
    }

    onCharsLoading = () => {
        this.setState({loading: true});
    }

    onNewCharsLoading = () => {
        this.setState({newItemsLoading: true});
    }

    itemRefs = [];

    setRef = (ref) => {
        this.itemRefs.push(ref);
    }

    focusOnItem = (id) => {
        this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));//ТУПИЛ ПОЛ ЧАСА ПОКА НЕ ВКУРИЛ ЧТО ПОДСКАЗКА БЫЛА classlist БЕЗ КЭМЕЛКЕЙСА
        this.itemRefs[id].classList.add('char__item_selected');
        this.itemRefs[id].focus();
        console.log(this.itemRefs);
    }

    renderView = (arr) => {

        const elements = arr.map((item, i) => {
            
            let imgStyle = item.thumbnail ==='http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {objectFit:'unset'} : {objectFit:'cover'};
            return (
                <li key={item.id} 
                    onClick={() => {
                        this.props.onCharSelected(item.id);
                        this.focusOnItem(i);
                    }}
                    className='char__item' 
                    tabIndex={0}
                    ref={this.setRef}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            e.preventDefault();
                            this.props.onCharSelected(item.id);
                            this.focusOnItem(i);
                        }}}>
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                </li>
            )
        })
        return (<ul className="char__grid">{elements}</ul>)
    
    }

    // updateChars() {
    //     this.onCharsLoading();
        

    //     // this.causeError.isError = 0; эмуляция ошибки
    // } 
    
    render() {
        const {chars,loading, error, newItemsLoading, offset, charEnded} = this.state;
        
        const viewItems = this.renderView(chars);
        
           

        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = !(loading || error) ?  viewItems : null;

        return (
            <div className="char__list">
                    {errorMessage}
                    {spinner}
                    {content}
                <button 
                    className="button button__main button__long"
                    disabled={newItemsLoading}
                    style={{'display': charEnded ? 'none' : 'block'}}
                    onClick={() => this.onRequest(offset)}> 
                    {/* чтобы передать аргумент offset из стейта - оформляем как функцию-стрелку */}
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

CharList.propTypes = {
    charId: PropTypes.number,
    onCharSelected: PropTypes.func
}

export default CharList;