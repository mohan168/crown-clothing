import React from 'react';

import { connect } from 'react-redux';

import CollectionPreview  from '../CollectionPreview/CollectionPreview'
import { createStructuredSelector } from 'reselect';
import './collectionOverviewstyles.scss';
import { selectCollections } from '../redux/shop/shopSelector';
 


const CollectionsOverview =({ collections }) => (
<div className='collections-overview'>
    
        {
            collections.map(({id, ...otherCollectionProps}) =>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    

</div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})


export default connect(mapStateToProps)(CollectionsOverview);

