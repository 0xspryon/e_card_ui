import styles from './Welcome.module.scss'
import React, { Component, Fragment } from 'react'
import { PrimaryButton } from 'office-ui-fabric-react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { Text } from 'office-ui-fabric-react/lib/Text';
import social_logo from './../../assets/imgs/social_logo.png'
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

class Container extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.top_row}>
                    <div
                        className={styles.header}
                        style={{ boxShadow: Depths.depth8 }}
                    >
                        <img src={social_logo} className={styles.img} />
                        <span></span>
                        <PrimaryButton className={styles.btn} >Sign in</PrimaryButton>
                        <PrimaryButton className={styles.btn} >Sign up</PrimaryButton>
                    </div>
                    <Text variant={`xxLarge`} block className={styles.cta_text_connect}>
                        Connect to create your complementary card!
                    </Text>
                    {/* <Text variant={`xxLarge`} block className={styles.tag}>
                        The sweet spot between social and professional networking!
                    </Text> */}
                    <Text variant={`xxLarge`} block className={styles.cta_text_search}>
                        A place for professionals to meet. Looking for someone?
                    </Text>

                    <SearchBox
                        placeholder="Searching for someone...!"
                        onSearch={newValue => console.log('value is ' + newValue)}
                        onFocus={() => console.log('onFocus called')}
                        onBlur={() => console.log('onBlur called')}
                        onChange={() => console.log('onChange called')}
                        className={styles.search_field}
                    />
                </div>
                <div className={styles.middle_row}>
                    <div className={styles.middle_row_section_description}>
                        <div className={styles.content}>
                            <Text variant={`mediumPlus`} block className={styles.reason_title}>
                                Browse through more than 9 million complementary cards and meet your next business partner ;-)
                            </Text>
                            <Text variant={`medium`} block className={styles.reason}>
                                <Icon iconName="accept" className="ms-IconExample" />A place for professionals to meet. Looking for someone?
                            </Text>
                            <Text variant={`medium`} block className={styles.reason}>
                                <Icon iconName="accept" className="ms-IconExample" />A place for professionals to meet. Looking for someone?
                            </Text>
                            <Text variant={`medium`} block className={styles.reason}>
                                <Icon iconName="accept" className="ms-IconExample" />A place for professionals to meet. Looking for someone?
                            </Text>
                        </div>
                    </div>
                    <div className={styles.middle_row_section_illustration}>
                    </div>
                </div>
                <div className={styles.bottom_row}>
                    <Link
                        variant={`mediumPlus`}
                        block
                        target="_blank"
                        className={styles.cta_text_search}
                        href={`http://www.ipr0d1g1.studio`}
                    >
                        iPR0D1G1 STUDIOS
                    </Link>
                    <Text variant={`mediumPlus`} block className={styles.cta_text_search} >
                        700-2828 Cradat Yaounde, Central Region, YDE, Cameroon, G1V 0B9
                        {/* The sweet spot between social and professional networking! */}
                    </Text>
                </div>
            </div>

        )
    }
}

export default Container;