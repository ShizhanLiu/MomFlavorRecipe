import View from './View.js';
//import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }
  _generateMarkupPreview(result) {
    const id = window.location.hash.slice(1);
    //result = this._data;
    return `    <li class="preview">
    <a class="preview__link ${
      result.id === id ? 'preview__link--active' : ''
    } " href="#${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="${result.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
    
      </div>
    </a>
  </li>`;
  }
}
//export only one resultsView and In controller we can import without having to create the instances
export default new ResultsView();
