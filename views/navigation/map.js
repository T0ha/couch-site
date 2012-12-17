function(doc) {
    if (doc.type=="page" && doc.published) {
	emit(doc._id, doc.button);
    }
}