import React, { useState } from 'react'
import { H1, H2, H3, P, A } from '../components/Typography'
import { Card } from '../components/Common.js'
import { Button } from '../components/Button'
import Accordion from '../components/Accordion'
import TextInput from '../components/TextInput'
import Countdown from '../containers/Countdown'
import Livestream from '../components/Livestream'
import JudgingCard from '../components/JudgingCard'
import Checkbox from '../components/Checkbox'

const toggleTheme = () => {
  const oldTheme = window.localStorage.getItem('localTheme')
  if (oldTheme === 'nwTheme') {
    window.localStorage.setItem('localTheme', 'hackcampTheme')
  } else {
    window.localStorage.setItem('localTheme', 'nwTheme')
  }
  window.location.reload()
}

export default () => {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <Button color="secondary" width="flex" href={`javascript:(${toggleTheme})()`}>
        Toggle Theme
      </Button>
      <P>
        Theme switcher. Drag the bookmarklet button from the page to your Bookmarks Toolbar. It
        should appear on the toolbar
      </P>

      <H1>Charcuturie</H1>
      <>
        <H1>This is an h1.</H1>
        <H2>This is an h2.</H2>
        <H3>This is an h3.</H3>
        <P>
          <A href="https://en.wikipedia.org/wiki/Charcuterie">Charcuterie</A> most often consists of
          a variety of meats and cheeses, often paired with crackers, fruit, nuts, and spreads. An
          ideal charcuterie board has a good balance of flavors and textures and has foods that
          contrast and complement each other's taste. It's some really long text. I'm really writing
          this way later than I should be. Is this what it's like to sell your soul to nwPlus?{' '}
        </P>
      </>
      <>
        <H2>Countdown</H2>
        <Countdown
          countDownDate={new Date('Fri Aug 05 2020 00:01:22 GMT-0700 (Pacific Daylight Time)')}
          eventDurationHours={48}
          eventName="Hacking ends in..."
        />
      </>
      <Card>
        <H2>Card Element</H2>
        <P>It can contain content. And even buttons!</P>
        <Button color="primary">Primary</Button>
        <Button color="primary" disabled={true}>
          Primary
        </Button>
        <Button color="secondary">Secondary</Button>
        <Button color="secondary" disabled={true}>
          Secondary
        </Button>
        <Button color="tertiary">Tertiary</Button>
        <Button color="tertiary" disabled={true}>
          Tertiary
        </Button>
        <Button width="small" color="secondary">
          Small
        </Button>
        <Button width="flex" color="secondary">
          Flex (ie. as wide as the label)
        </Button>
        <Button width="large" color="secondary">
          Large
        </Button>
        <Button height="short" color="secondary">
          Short
        </Button>
        <Button height="tall" color="secondary">
          Tall
        </Button>
        <TextInput placeholder="Default" />
        <TextInput value="With Value" />
        <TextInput value="With Value Disabled" disabled={true} />
        <TextInput placeholder="Disabled" disabled={true} />
        <TextInput placeholder="Invalid" invalid={true} errorMsg={'Pls try again lol'} />
        <TextInput placeholder="Medium" size="medium" />
        <TextInput placeholder="Large" size="large" />
      </Card>
      <Accordion heading="Accordion Component">
        Some hidden content. This can get pretty long too, and even contain other stuff like headers
        or images.
      </Accordion>
      <H2>Livestream Component</H2>
      <Livestream />
      <JudgingCard
        title="Imposter"
        imgUrl="https://img.youtube.com/vi/PQgHXPGoKwg/maxresdefault.jpg"
        teamName="H4ckH0use"
        description="Imposter is a productivity timer designed to keep friends on task together even when working remotely. It aims to create a productive and social environment for all of us working from home."
      />
      <H2>Checkbox</H2>
      <Checkbox label="Default state" checked={checked} onChange={() => setChecked(!checked)} />
      <Checkbox label="Selected state" checked readOnly />
    </>
  )
}
