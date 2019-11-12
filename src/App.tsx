import {contentView, TextInput, WebView,Button, TextView, contentView, Constraint} from 'tabris';

export class App {

  public start() {
    contentView.append(
      <$>
        <TextInput left={16} right={16} top={8} message='Enter URL...'
      text='http://en.wikipedia.org' floatMessage={false} onAccept={loadUrl}/>
    <WebView stretchX bottom top='prev() 8'/>
      </$>
    );
  }
function loadUrl() {
  $(WebView).only().url = $(TextInput).only().text;
}

loadUrl();

 

}
